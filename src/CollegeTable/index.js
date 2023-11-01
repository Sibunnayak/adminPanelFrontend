
// import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import College from "./college";
import CreateCollege from "./CreateCollege";
import UpdateCollege from "./collegeUpdate";
import Admin from "./admin";


function CollegeTable(){
    // const [count,setCount] = useState(0);

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<College />}></Route>
                    <Route path="/admin" element={<Admin />}></Route>
                    <Route path="/create" element={<CreateCollege />}></Route>
                    <Route path="/update/:id" element={<UpdateCollege />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default CollegeTable;