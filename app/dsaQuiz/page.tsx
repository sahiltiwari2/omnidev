'use client'
import React, { useState, useEffect } from 'react';
import data from '@/dsaQuestions.json';
import { Checkbox, Button } from '@nextui-org/react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, onValue, update, set } from "firebase/database";
import { auth, database } from '@/firebse.config';
import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react'
import { Orbitronn } from '@/config/fonts';

const Page = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState<string | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<number[]>(Array(data.length).fill(-1));
    const [score, setScore] = useState(0); 
    const [username, setUserName] = useState('');
    const [currentScore, setCurrentScore] = useState(0); 
    const [attemptscore, setAttemptScore] = useState(0);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setEmail(user.email);
                // console.log(user.email);
            } else {
                setIsLoggedIn(false);
                setEmail(null);
            }
        });

        onOpen();
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (email) {
            const emailKey = email.replace(/\./g, '_');
            const dbRef1 = ref(database, `userName/${emailKey}`);
            onValue(dbRef1, (snapshot) => {
                const data = snapshot.val();
                setUserName(data);
            });
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

    const handleCheckboxChange = (questionIndex: number, optionIndex: number) => {
        const newSelectedOptions = [...selectedOptions];
        if (newSelectedOptions[questionIndex] === optionIndex) {
            newSelectedOptions[questionIndex] = -1; 
        } else {
            newSelectedOptions[questionIndex] = optionIndex; 
        }
        setSelectedOptions(newSelectedOptions);
    };

    const handleSubmit = async () => {
        let newScore = 0;
        selectedOptions.forEach((selectedOption, questionIndex) => {
            if (selectedOption === data[questionIndex].incorrect.length) {
                newScore += 10;
            }
        });
        const updatedScore = currentScore + newScore;
        setScore(updatedScore);
        setAttemptScore(newScore);

        if (username) {
            await set(ref(database, `DSA Score/${username}`), updatedScore);
        }

    };

    return (
        <div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Rules for the Quiz
                            </ModalHeader>
                            <ModalBody>
                                <h1>
                                    1. You can only attempt this quiz onces <br /><br />
                                    2. After selecting all the answers click sbmit. <br /><br />
                                    3. 10 Points will be given for every correct answer.  <br /><br />
                                    4. This test is for your own understanding, so do not cheat. <br /><br />
                                    6. All the best and keep working hard.
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

                {/* {email ? email : 'No user logged in'} {/* Display the stored email or a default message */}
                {/* {username ? username : 'No user logged in'} Display the stored username or a default message  */}
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
                                    {item.incorrect.map((option, optionIndex) => (
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
                                    <div className='ml-28'>
                                        <Checkbox
                                            isSelected={selectedOptions[questionIndex] === item.incorrect.length}
                                            onChange={() => handleCheckboxChange(questionIndex, item.incorrect.length)}
                                        >
                                            {item.correct}
                                        </Checkbox>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-center mt-5'>
                        <Button onPress={handleSubmit} variant='ghost' color='success' className='w-32'>Submit </Button>
                    </div>
                    <div className='flex justify-center mt-5'>
                        {/* <p>Score: {attemptscore}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
