import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    // const [quizes, setQuizes] = useState([]);
    const quizs = useLoaderData();
    // console.log(quizs);
    // const result = JSON.stringify(quizs);
    // console.log(result);

    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/quiz').then(res => res.json()).then(data => setQuizes(data));
    // }, []);


    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    {
                        quizs?.data?.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                        ></Quiz>)
                    }
                </div>
            </div>

        </>
    );
};

export default Topics;