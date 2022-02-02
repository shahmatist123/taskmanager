import React from 'react';
import {  Link } from "react-router-dom";
const HeaderLinks = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/deleted">Deleted</Link>
                </li>
                <li>
                    <Link to="/all">All</Link>
                </li>
                <li>
                    <Link to="/complied">Complied</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
                <li>
                    <Link to="/register">Sign up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderLinks;
