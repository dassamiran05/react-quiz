import { useEffect, useState } from "react";

const useQuizDetails = id => {
    const [quizs, setQuizs] = useState([]);

    useEffect(() => {
        fetch(` https://openapi.programming-hero.com/api/quiz/${id}`).then(res => res.json()).then(data => setQuizs(data));
    }, [id]);

    return [quizs, setQuizs];
}

export default useQuizDetails;