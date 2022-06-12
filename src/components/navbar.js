import React from "react";
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa' ;
import {NavLink}from 'react-router-dom';
const Navbar=({onDeleteCompleted})=>(
    <footer className="d-flex justify-content-between bg-dark p-3" id="mainFooter">
    <div className="btn-group">
        <NavLink to="/" className="btn btn-outline-dark bg-info" exact={true}><FaListAlt/></NavLink>
        <NavLink to="/done" className="btn btn-outline-dark bg-success"><FaCheckSquare/></NavLink>
        <NavLink to="/add-task" className="btn btn-outline-dark bg-warning" exact={true}><FaPlusSquare/></NavLink>
    </div>
    <button className="btn btn-outline-dark bg-danger" onClick={onDeleteCompleted}><FaTrash/></button>
</footer>
)
export default Navbar