import React from 'react';
import './Candidate.css';

const Candidate = (props) => {
    const { name, role, experience, country, salary, image } = props.candidate;
    return (
        <div className="col">
            <div className="card h-100 py-3">
                <div className="card-img-top text-center">
                    <img src={image} alt="..." />
                </div>
                <div className="card-body">
                    <h5>Name: {name}</h5>
                    <h5>Role: {role}</h5>
                    <h5>Experience: {experience} Years</h5>
                    <h5>Country: {country}</h5>
                    <h5>Salary: ${salary}</h5>
                </div>
            </div>
        </div>
    );
};

export default Candidate;