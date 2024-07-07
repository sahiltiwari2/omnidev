"use client"
import React, { useState, useEffect } from 'react';
import data from '@/public/api/questions/dsaQuestions.json';
import { Checkbox, Button } from '@nextui-org/react';
import { auth, database, firestore } from '@/firebaseConfig'; // Import Firebase database
import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';
import { Orbitronn } from '@/config/fonts';
import { onAuthStateChanged } from 'firebase/auth';
import { setDoc, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import withAuth from '@/components/withAuth';
import { DatabaseReference, ref, onValue, off, get } from 'firebase/database'; // Import onValue and off from Firebase database

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
    const [showQuiz, setShowQuiz] = useState(false); // Initially hide quiz until published
    const [isLoading, setIsLoading] = useState(true);
    const [quizTime, setQuizTime] = useState(1 * 60); // Quiz time in seconds (default 1 minute for testing)
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null); // Timer reference
    const [submissionMessage, setSubmissionMessage] = useState<string>(''); // Message after submission
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setEmail(user.email);
            } else {
                setIsLoggedIn(false);
                setEmail(null);
                setIsLoading(false); // No need to load if user is not logged in
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
                    setShowQuiz(false);
                } else {
                    setShowQuiz(true);
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
            setShowQuiz(status === true);
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
        // Start the quiz timer
        setTimer(setInterval(() => {
            setQuizTime((prevTime) => prevTime - 1); // Countdown timer
        }, 1000));
    };

    const handleSubmit = async () => {
        // Clear the timer when submitting
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
                // Check quiz status before storing score
                const quizStatusRef = ref(database, 'quizStatus');
                const quizStatusSnapshot = await get(quizStatusRef);
                const quizStatus = quizStatusSnapshot.val();

                if (!quizStatus) {
                    setSubmissionMessage('The quiz has been stopped by the admin. You cannot submit your score.');
                } else {
                    await setDoc(doc(firestore, 'UserScores', email), {
                        email: email,
                        name: username,
                        score: updatedScore
                    });
                    console.log('Score stored in Firestore successfully.');
                    setSubmissionMessage('Your quiz has been submitted successfully.');
                    setShowQuiz(false); // Prevent user from retaking the quiz
                }
            } catch (error) {
                console.error('Error storing score in Firestore:', error);
            }
        }
    };

    useEffect(() => {
        // Check if quizTime is zero to stop quiz
        if (quizTime <= 0) {
            setShowQuiz(false);
            clearInterval(timer!); // Stop the timer
        }
    }, [quizTime]);

    useEffect(() => {
        // Ensure the quiz starts when shown
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
            {showQuiz && (
                <>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">
                                        Rules for the Quiz
                                    </ModalHeader>
                                    <ModalBody>
                                        <h1>
                                            1. You can only attempt this quiz once.<br /><br />
                                            2. After selecting all the answers, click submit.<br /><br />
                                            3. 10 Points will be given for every correct answer.<br /><br />
                                            4. This test is for your own understanding, so do not cheat.<br /><br />
                                            5. All the best and keep working hard.
                                        </h1>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Ok
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>

                    <div className='text-3xl font-bold'>
                        <div className={Orbitronn.className}>
                            DSA MCQ test
                        </div>
                        <div className='text-xl font-normal text-red-600'>
                            All the Best 👍
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='mt-16 ml-5'>
                            {data.map((item, questionIndex) => (
                                <div key={questionIndex} style={{ marginBottom: '20px' }} className='border-3 rounded-lg p-5'>
                                    <div className='font-bold text-2xl ml-16'>
                                        {item.question}
                                    </div>
                                    <div className='mt-5'>
                                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                                            {item.options.map((option, optionIndex) => (
                                                <li key={optionIndex} style={{ marginBottom: '5px' }}>
                                                    <div className='ml-28'>
                                                        <Checkbox
                                                            isSelected={selectedOptions[questionIndex] === optionIndex}
                                                            onChange={() => handleCheckboxChange(questionIndex, optionIndex)}
                                                        >
                                                            {option}
                                                        </Checkbox>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            <div className='flex justify-center mt-5'>
                                <Button onPress={handleSubmit} variant='ghost' color='success' className='w-32'>Submit</Button>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <p>Time Left: {Math.floor(quizTime / 60)}:{quizTime % 60 < 10 ? `0${quizTime % 60}` : quizTime % 60}</p>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <p>Score: {attemptscore}</p>
                            </div>
                            {submissionMessage && (
                                <div className='flex justify-center mt-5'>
                                    <p>{submissionMessage}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
            {!showQuiz && (
                <div className="flex items-center justify-center h-screen">
                    <h1 className="text-3xl font-bold text-gray-800">Quiz is not available yet. Please check back later.</h1>
                </div>
            )}
        </div>
    );
};

export default withAuth(Page);
