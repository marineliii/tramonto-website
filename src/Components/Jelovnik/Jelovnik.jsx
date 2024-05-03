/* eslint-disable no-unused-vars */
import React from 'react'
import './Jelovnik.css'
import oNama1 from '../../assets/hrana1.png'
import oNama2 from '../../assets/hrana2.png'
import oNama3 from '../../assets/hrana3.png'
import oNama4 from '../../assets/hrana4.png'
import dunja from '../../assets/dunja.jpg'
import testSlika from "../../assets/logo.png"



const ONama = () => {
    return (
        <div className='jelovnik'>
            <div className='jelovnik-text'>
                <h1>Jelovnik</h1>
                <p>U Dolly Bell-u, hrana je umetnost, i svaki zalogaj je prilika za istraživanje novih ukusa.

                    Izaberite između ukusnih doručaka, bogate selekcije bifteka, aromatičnih pasta i rižota, osvežavajućih obroka salate,
                    sočnih burgera i tortilja, toplih supa i čorbi, prefinjenih glavnih jela, svežih morskih specijaliteta,
                    odležanih mesa, slasnih kolača i mnogo više..</p>
            </div>
            <div className='jelovnik-slike'>
                <div className="menu-item">
                    <div className="img-wrapper">
                        <img src={dunja} alt="" className='slika4' />
                    </div>
                    <h3>Dorucak</h3>
                    <p>neki dugacak tekst ne znam ti ni ja evo nek pise nesto jebem li ga</p>
                </div>
                <div className="menu-item">
                    <div className="img-wrapper">
                        <img src={dunja} alt="" className='slika4' />
                    </div>
                    <h3>Dorucak</h3>
                    <p>Opis dorucka</p>
                </div>
                <div className="menu-item">
                    <div className="img-wrapper">
                        <img src={dunja} alt="" className='slika4' />
                    </div>
                    <h3>Dorucak</h3>
                    <p>Opis dorucka</p>
                </div>
                <div className="menu-item">
                    <div className="img-wrapper">
                        <img src={dunja} alt="" className='slika4' />
                    </div>
                    <h3>Dorucak</h3>
                    <p>Opis dorucka</p>
                </div>
                <div className="menu-item">
                    <div className="img-wrapper">
                        <img src={testSlika} alt="" className='slika4' />
                    </div>
                    <h3>Dorucak</h3>
                    <p>Opis dorucka</p>
                </div>




            </div>


        </div>
    )
}

export default ONama;
