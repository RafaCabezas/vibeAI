import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AuthConsumer from "../hooks/useAuth";

import "./styles/navbar_styles.css"
// import logo from "../#"


function Navbar() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {setClicked(!clicked)}

    const [auth] = AuthConsumer()

    return(
        <>
        <nav>
            {/* <NavLink to="/"><img src={logo} className="App-logo" alt="I LIKED!"/></NavLink> */}
            <div id='cajaTexto'>
                <ul id='navbar' className={clicked ? "#navbar active" : "#navbar"}>
                    
                {auth.isAuth ? 
                        <li><NavLink to="/logout"><i className="fa-solid fa-right-to-bracket"></i></NavLink></li>
                        : 
                        <li><NavLink to="/login">LOGIN</NavLink></li> 
                    }                    

                </ul>
            </div>
            <div id='mobile' onClick={handleClick}>
                <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
        </>
    )}


export default Navbar;