/* eslint-disable no-unused-vars */
import React from 'react'
import './ONama.css'
import oNama1 from '../../assets/oNama1.png'
import oNama2 from '../../assets/ONama2.png'
import oNama3 from '../../assets/ONama3.png'


const ONama = () => {
    return (
        <div className='o-nama'>
            <div className='o-nama-text'>
                <h1>O Nama</h1>
                <p>Gastro pub Tramonto je savremeni biser na gastronomskoj mapi Kraljeva.
                    Otvoren 2019. godine, nalazi se na u samom centru Kraljeva.
                    Naša ponuda obuhvata vrhunski enterijer, prostranu baštu okruženu zelenilom,
                    izvanrednu hranu i pažljivo odabrane napitke.

                    Bez obzira na doba dana, Kraljevo nudi nezaboravno iskustvo.
                    Bilo da ste u potrazi za savršenim mestom za doručak, ručak, večeru ili noćni provod,
                    mi smo tu da vam pružimo nezaboravan doživljaj.</p>
            </div>
            <div className='o-nama-slike'>
                <img src={oNama1} alt="" className='slika1' />
                <img src={oNama2} alt="" className='slika2' />
                <img src={oNama3} alt="" className='slika3' />

            </div>


        </div>
    )
}

export default ONama;
