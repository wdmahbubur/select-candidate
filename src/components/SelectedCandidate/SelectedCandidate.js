import React from 'react';

const SelectedCandidate = (props) => {
    // Destructuring
    const { candidateList } = props;

    // count total cost
    const totalCost = candidateList.reduce((previous, current) => previous + current.salary, 0);

    return (
        <div>
            <h5>Selected Candidate: {candidateList.length}</h5>
            <h5>Candidate Name:</h5>
            <ol>
                {
                    candidateList.map(candidate => <li className="fs-5" key={candidate.id}>{candidate.name}</li>)
                }
            </ol>
            <h5>Total Cost: ${totalCost}</h5>
        </div>
    );
};

export default SelectedCandidate;