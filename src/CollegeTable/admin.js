import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Admin () {
const [colleges, setColleges] = useState([])

useEffect(() => {
    axios.get('http://localhost:3001')
    .then(result => 
        setColleges(result.data)
    )
    .catch(err => console.log(err))
},[])

const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteCollege/'+id)
    .then(result => {
        console.log(result)
        window.location.reload()
    })
    .catch(err => console.log(err))
}

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className=" bg white rounded p-3 vh-100">
               <div className="d-flex"> <Link to="/create" className="btn btn-success">Create</Link></div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Fees</th>
                            <th>Placement</th>
                            <th>Review</th>
                            <th>Rank</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            colleges.map((college) =>{
                               return <tr>
                                    <td>{college.Id}</td>
                                    <td>{college.Name}</td>
                                    <td>{college.Fees}</td>
                                    <td>{college.Placement}</td>
                                    <td>{college.Review}</td>
                                    <td>{college.Rank}</td>
                                    <td>
                                    <Link to={`/update/${college._id}`} className="btn btn-success">Edit</Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(college._id)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )

}

export default Admin;