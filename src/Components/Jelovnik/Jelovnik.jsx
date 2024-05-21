/* eslint-disable no-unused-vars */
import React from 'react'
import './Jelovnik.css'
import oNama1 from '../../assets/hrana1.png'
import oNama2 from '../../assets/hrana2.png'
import oNama3 from '../../assets/hrana3.png'
import oNama4 from '../../assets/hrana4.png'
import dunja from '../../assets/dunja.jpg'
import dorucak from "../../assets/dorucak-cover.jpg"
import svinja from "../../assets/svinja-cover.jpg"
import junetina from "../../assets/junetina-cover.jpg"
import testSlika from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'



const Jelovnik = () => {

    const navigate = useNavigate();


    const handleClick = (putanja) => {
        navigate(`/${putanja}`);
    };
    const handleClickJelovnik = () => {
        navigate(`/jelovnik`);
    };

    return (
        <div className='jelovnik'>

            <div className='jelovnik-text'>
                <h1>Jelovnik</h1>
                <p>U Tramontu, hrana je umetnost, i svaki zalogaj je prilika za istraživanje novih ukusa.

                    Izaberite između ukusnih doručaka, bogate selekcije bifteka, aromatičnih pasta i rižota, osvežavajućih obroka salate,
                    sočnih burgera i tortilja, toplih supa i čorbi, prefinjenih glavnih jela, svežih morskih specijaliteta,
                    odležanih mesa, slasnih kolača i mnogo više.</p>
                <button onClick={handleClickJelovnik} className='btn jelovnik-btn'>Vidi još</button>
            </div>
            <div className='jelovnik-slike'>
                <div className="menu-item">
                    <div className="img-wrapper">
                        <img src={dorucak} alt="" onClick={() => handleClick("jelovnik/dorucak")} className='slika4' />
                    </div>
                    <h3>Dorucak</h3>
                    <p>Mozda ne mora ovde nista da pise, mozda je tako bolje</p>
                </div>
                <div className="menu-item">
                    <div className="img-wrapper">
                        <img src={svinja} alt="" className='slika4' />
                    </div>
                    <h3>Jela od svinjskog mesa</h3>
                    <p></p>
                </div>
                <div className="menu-item">
                    <div className="img-wrapper">
                        <img src={junetina} alt="" onClick={() => handleClick("jelovnik/junetina")} className='slika4' />
                    </div>
                    <h3>Jela od juneceg mesa</h3>
                    <p>Opis menija</p>
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

export default Jelovnik;
