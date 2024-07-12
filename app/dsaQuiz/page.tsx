"use client";

import React, { useState, useEffect } from 'react';
import data from '@/public/api/questions/dsaQuestions.json';
import { Checkbox, Button } from '@nextui-org/react';
import { auth, database, firestore } from '@/firebaseConfig';
import { useDisclosure } from '@nextui-org/react';
import { Orbitronn } from '@/config/fonts';
import { onAuthStateChanged } from 'firebase/auth';
import { setDoc, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import withAuth from '@/components/withAuth';
import { DatabaseReference, ref, onValue, off, get } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Question {
    question: string;
    options: string[];
    answer: string;
}

const Page = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState<string | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<number[]>(Array(data.length).fill(-1));
    const [score, setScore] = useState(0);
    const [username, setUserName] = useState('');
    const [currentScore, setCurrentScore] = useState(0);
    const [attemptscore, setAttemptScore] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [quizTime, setQuizTime] = useState(1 * 60); // Quiz time in seconds (default 1 minute for testing)
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [submissionMessage, setSubmissionMessage] = useState<string>('');
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizStopped, setQuizStopped] = useState(false);
    const [onAndoff, setOnAndOff] = useState(false);
    const [show, setShow] = useState(false);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setEmail(user.email);
            } else {
                setIsLoggedIn(false);
                setEmail(null);
                setIsLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (email) {
            const fetchUserName = async () => {
                try {
                    const usernamesQuery = query(collection(firestore, 'usernames'), where('email', '==', email));
                    const querySnapshot = await getDocs(usernamesQuery);
                    if (!querySnapshot.empty) {
                        setUserName(querySnapshot.docs[0].id);
                    }
                } catch (error) {
                    console.error("Error fetching user name:", error);
                }
            };
            fetchUserName();
        }
    }, [email]);

    useEffect(() => {
        if (username) {
            const dbRef = ref(database, `DSA Score/${username}`);
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setCurrentScore(data);
                }
            });
        }
    }, [username]);

    useEffect(() => {
        const checkSubmissionStatus = async () => {
            if (email) {
                const docRef = doc(firestore, 'UserScores', email);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setSubmissionMessage('You have already submitted the quiz.');
                    setShowQuiz(false); // Hide quiz immediately after submission
                } else {
                    setSubmissionMessage('');
                }
                setIsLoading(false);
            }
        };

        if (email) {
            checkSubmissionStatus();
        }
    }, [email]);

    useEffect(() => {
        const quizStatusRef = ref(database, 'quizStatus');
        const handleQuizStatusChange = (snapshot: { val: () => any; }) => {
            const status = snapshot.val();
            if (status === true) {
                setQuizStarted(true);
                setQuizStopped(false);
            } else {
                setQuizStarted(false);
                setQuizStopped(true);
            }
            
            setOnAndOff(status === true);
            setIsLoading(false);
        };

        onValue(quizStatusRef, handleQuizStatusChange);

        return () => off(quizStatusRef, 'value', handleQuizStatusChange);
    }, []);

    const handleCheckboxChange = (questionIndex: number, optionIndex: number) => {
        const newSelectedOptions = [...selectedOptions];
        if (newSelectedOptions[questionIndex] === optionIndex) {
            newSelectedOptions[questionIndex] = -1;
        } else {
            newSelectedOptions[questionIndex] = optionIndex;
        }
        setSelectedOptions(newSelectedOptions);
    };

    const startQuiz = () => {
        setTimer(setInterval(() => {
            setQuizTime((prevTime) => prevTime - 1);
        }, 1000));
    };

    const handleSubmit = async () => {
        if (timer) {
            clearInterval(timer);
            setTimer(null);
        }

        let newScore = 0;
        selectedOptions.forEach((selectedOption, questionIndex) => {
            if (selectedOption !== -1 && data[questionIndex].options[selectedOption] === data[questionIndex].answer) {
                newScore += 10;
            }
        });
        const updatedScore = currentScore + newScore;
        setScore(updatedScore);
        setAttemptScore(newScore);

        if (email) {
            try {
                if (quizStopped) {
                    setSubmissionMessage('The quiz has been stopped by the admin. You cannot submit your score.');
                } else if (quizStarted) {
                    const docRef = doc(firestore, 'UserScores', email);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        setSubmissionMessage('You have already submitted the quiz.');
                        setShowQuiz(false); // Hide quiz immediately after submission
                    } else {
                        await setDoc(doc(firestore, 'UserScores', email), {
                            email: email,
                            name: username,
                            score: updatedScore
                        });
                         setSubmissionMessage('Your quiz has been submitted successfully.');
                        setShowQuiz(false); // Hide quiz immediately after submission

                        if (onAndoff) {
                            toast.success("Thank you for your submission");
                        } else {
                            toast.error("Quiz is finished");
                        }
                    }
                }
            } catch (error) {
                console.error('Error storing score in Firestore:', error);
            }
        }
    };

    useEffect(() => {
        if (quizTime === 0) {
            setShowQuiz(false);
            handleSubmit();
            clearInterval(timer!);
        }
    }, [quizTime]);

    useEffect(() => {
        if (showQuiz) {
            startQuiz();
        }
    }, [showQuiz]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-3xl font-bold text-gray-800">Loading...</h1>
            </div>
        );
    }

    return (
        <div>
            {(!onAndoff || !showQuiz) && (
                <div className="flex items-center justify-center h-screen">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {onAndoff ? "Thank you for your submission!" : "Quiz has not started yet."}
                    </h1>
                </div>
            )}
            {showQuiz && onAndoff && (
                <>
                    <div className='text-3xl font-bold'>
                        <div className={Orbitronn.className}>
                            DSA MCQ test
                        </div>
                        <div className='text-xl font-normal text-red-600'>
                            All the Best 👍
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <h1 className='text-3xl font-bold'>DSA Quiz</h1>
                    </div>
                    <div className='text-xl font-normal text-center text-red-600'>
                        You have {Math.floor(quizTime / 60)}:{quizTime % 60 < 10 ? `0${quizTime % 60}` : quizTime % 60} minutes remaining.
                    </div>
                    {data.map((question: Question, questionIndex: number) => (
                        <div key={questionIndex} className='mb-6'>
                            <h2 className='text-xl font-semibold mb-2'>{question.question}</h2>
                            <div className='space-y-2'>
                                {question.options.map((option, optionIndex) => (
                                    <label key={optionIndex} className='flex items-center space-x-2'>
                                        <Checkbox
                                            isSelected={selectedOptions[questionIndex] === optionIndex}
                                            onChange={() => handleCheckboxChange(questionIndex, optionIndex)}
                                            aria-label={option}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                    <Button className='mt-4' onClick={handleSubmit} color='primary'>
                        Submit
                    </Button>
                    {submissionMessage && (
                        <div className="flex items-center justify-center h-screen">
                            <h1 className="text-3xl font-bold text-gray-800">
                                {submissionMessage}
                            </h1>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default withAuth(Page);
