import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({ quiz }) => {

    const { id, name, logo, total } = quiz;
    const navigate = useNavigate();

    const handleQizsDetails = id =>{
        navigate(`/api/quiz/${id}`);
    }
    return (
        <>
            <div className='col-lg-3 col-md-6 col-12 single-card'>
                <div className="card " style={{ width: "18rem" }}>
                    <img src={logo} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <button className="btn btn-primary" onClick={() => handleQizsDetails(id)}>Start now</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Quiz;