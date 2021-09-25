import React, { useEffect, useState } from 'react';
import Candidate from '../Candidate/Candidate';

const Main = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch('./fakeCandidate.json')
            .then(res => res.json())
            .then(data => setCandidates(data))
    }, [])

    return (
        <div className="d-flex">
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        candidates.map(candidate => <Candidate key={candidate.id} candidate={candidate}></Candidate>)
                    }
                </div>

            </div>
            <div>

            </div>

        </div>
    );
};

export default Main;