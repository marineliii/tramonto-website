/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import { useNavigate } from "react-router-dom";


const Hero = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/jelovnik`);
    };

    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Tramonto Kraljevo</h1>
                <p> Otkrijte savršen spoj vrhunske hrane, autentičnih ukusa i nezaboravne atmosfere. Mesto gde se ljubav prema najukusnijim specijalitetima susreće sa najboljim provodom.

                </p>
                <button onClick={handleClick} className='btn'>Jelovnik</button>
            </div>
        </div>
    )
}

export default Hero
