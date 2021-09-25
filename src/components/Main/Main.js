import React, { useEffect, useState } from 'react';
import Candidate from '../Candidate/Candidate';
import SelectedCandidate from '../SelectedCandidate/SelectedCandidate';
import './Main.css'

const Main = () => {
    //declare state
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        // load from json file
        fetch('./fakeCandidate.json')
            .then(res => res.json())
            .then(data => setCandidates(data))
    }, [])

    // declare state for make selected candidate
    const [selectedCandidateList, setSelectedCandidateList] = useState([]);

    const handleSelectedBtn = (selectedCandidate) => {
        //check selected candidate existed on array
        const newIdIsAvailable = selectedCandidateList.find(candidate => candidate.id === selectedCandidate.id);

        //selected candidate is not existed then add data on array 
        if (!newIdIsAvailable) {
            const newCandidateList = [...selectedCandidateList, selectedCandidate]
            setSelectedCandidateList(newCandidateList);
        }

    }

    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        candidates.map(candidate => <Candidate key={candidate.id} candidate={candidate} handleSelectedBtn={handleSelectedBtn}></Candidate>)
                    }
                </div>

            </div>
            <div className="col-md-3">
                <div className="py-3 px-3 rounded shadow selected-summery">
                    <h4 className="text-center fw-bold">Selected Summery</h4>
                    <SelectedCandidate candidateList={selectedCandidateList}></SelectedCandidate>
                </div>
            </div>


        </div>
    );
};

export default Main;