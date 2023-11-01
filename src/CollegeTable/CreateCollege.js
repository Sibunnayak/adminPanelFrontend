import React from "react";
import axios from 'axios';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
function CreateCollege () {
const [Id,setId] = useState()
const [Name,setName] = useState()
const [Fees,setFees] = useState()
const [Placement,setPlacement] = useState()
const [Review,setReview] = useState()
const [Rank,setRank] = useState()
const navigate = useNavigate();
const Submit =(e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/CreateCollege",{Id,Name,Fees,Placement,Review,Rank})
    .then(result => {
        console.log(result)
    navigate('/admin')
    })
    .catch(err => console.log(err))
}

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="w-50 bg white rounded p-3 ">
            <form onSubmit={Submit}>
                <h2>Add College</h2>
                <div className="mb-2">
                    <label htmlFor="">ID</label>
                    <input type="number" placeholder='Enter ID' className='form-control' 
                    onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">College Name</label>
                    <input type="text" placeholder='Enter College Name' className="form-control" 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Fees</label>
                    <input type="text" placeholder='Enter Fees' className="form-control"
                    onChange={(e) => setFees(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Placement</label>
                    <input type="text" placeholder='Enter Placement Percentage' className="form-control" 
                    onChange={(e) => setPlacement(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Review</label>
                    <input type="number" placeholder='Enter Review' className="form-control" 
                    onChange={(e) => setReview(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Rank</label>
                    <input type="number" placeholder='Enter college Rank' className="form-control" 
                    onChange={(e) => setRank(e.target.value)}
                    />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
        </div>
    )

}

export default CreateCollege;