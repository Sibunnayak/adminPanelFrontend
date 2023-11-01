import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";

function UpdateCollege () {
const {id} = useParams();
const [Id,setId] = useState()
const [Name,setName] = useState()
const [Fees,setFees] = useState()
const [Placement,setPlacement] = useState()
const [Review,setReview] = useState()
const [Rank,setRank] = useState()
const navigate = useNavigate();

useEffect(() => {
    axios.get('http://localhost:3001/getuser/'+id)
    .then(result => 
       { console.log(result)
        setId(result.data.Id)
        setName(result.data.Name)
        setFees(result.data.Fees)
        setPlacement(result.data.Placement)
        setReview(result.data.Review)
        setRank(result.data.Rank)
       })
    .catch(err => console.log(err))
},[id])

const Update =(e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/UpdateCollege/"+id,{Id,Name,Fees,Placement,Review,Rank})
    .then(result => {
        console.log(result)
    navigate('/admin')
    })
    .catch(err => console.log(err))
}
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="w-50 bg white rounded p-3 ">
            <form onSubmit={Update}>
                <h2>Update College</h2>
                <div className="mb-2">
                    <label htmlFor="">ID</label>
                    <input type="number" placeholder='Enter ID' className='form-control' 
                    value={Id} onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">College Name</label>
                    <input type="text" placeholder='Enter College Name' className="form-control" 
                    value={Name} onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Fees</label>
                    <input type="text" placeholder='Enter Fees' className="form-control" 
                    value={Fees} onChange={(e) => setFees(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Placement</label>
                    <input type="text" placeholder='Enter Placement Percentage' className="form-control" 
                    value={Placement} onChange={(e) => setPlacement(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Review</label>
                    <input type="number" placeholder='Enter Review' className="form-control" 
                    value={Review} onChange={(e) => setReview(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Rank</label>
                    <input type="number" placeholder='Enter college Rank' className="form-control" 
                    value={Rank} onChange={(e) => setRank(e.target.value)}
                    />
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        </div>
        </div>
    )

}

export default UpdateCollege;