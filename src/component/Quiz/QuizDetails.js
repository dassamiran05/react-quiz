import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useQuizDetails from '../../hooks/useQuizDetails';

const QuizDetails = () => {

    const { QuizID } = useParams();
    const [quizs] = useQuizDetails(QuizID);
    console.log(quizs);
    const [score, setScore] = useState(0);
    const [blockQuesttion, setBlockQuestion] = useState([]);
    const [correctAnswer, setCorrectanswer] = useState(false);
    const [clickAnswerID, setClickanswerId] = useState(null);
    const [index, setIndex] = useState(null);

    const handleCorrectAnswer = (op, i, correct, ansID) => {
        setBlockQuestion((prev) => [...prev, ansID]);
        setClickanswerId(ansID);
        setIndex(i);
        if (op === correct) {
            setScore(score + 1);
            toast.success("right answer");
            setCorrectanswer(true);
        } else {
            toast.error("Wrong answer");
            setCorrectanswer(false);
        }
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-8 col-md-6 col-12">
                        {
                            quizs?.data?.questions?.map(que => {
                                return (
                                    <>
                                        <div className='questions'>
                                            <p className='question'>{que.question.slice(3, -4)}</p>
                                            <div className='answer'>
                                                <div className='col-lg-6 col-md-6 col-12'>
                                                    {
                                                        que.options.map((option, i) => {
                                                            return (
                                                                <>
                                                                    <button className={clickAnswerID === que.id && index === i ? correctAnswer ? 'btn btn-success' : 'btn btn-danger' : 'btn btn-secondary'} style={{
                                                                        width: "100%",
                                                                        marginBottom: "10px"   
                                                                    }} disabled={blockQuesttion.includes(que.id)} onClick={() => handleCorrectAnswer(option, i, que.correctAnswer, que.id)}>{option}</button>
                                                                </>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        }
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className='Score'>
                            {
                                score > 0 ? `The score is ${score}` : <p>The score is not available</p> 
                            }
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default QuizDetails;