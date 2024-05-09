/* eslint-disable no-unused-vars */
import React from 'react'
import './GalerijaMain.css'
import { useNavigate } from 'react-router-dom'


const GalerijaMain = () => {
    const navigate = useNavigate();

    return (
        <div className='galerija container'>
            <div className="galerija-text">
                <h2>Galerija</h2>
                <p> Zavirite u tramonto</p>
                <button onClick={() => navigate("/galerija")} className='btn'>Galerija</button>
            </div>
        </div>
    )
}

export default GalerijaMain;
