/* eslint-disable no-unused-vars */


import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import "./JelovnikPage.css"

const JelovnikPage = () => {
    const navigate = useNavigate();


    const handleClick = (putanja) => {
        navigate(`/${putanja}`);
    };

    return (
        <div className="cela-strana">
            <Navbar />
            <div className="header-jelovnik">
                <h1>Jelovnik</h1>
            </div>
            <div className="uvod">
                <h1>Ukusi kojima se ponosimo</h1>
                <p>Naš jelovnik je pažljivo osmišljen kako bismo zadovoljili sva Vaša čula.

                    Sa širokim izborom jela, od doručka do večere, Tramonto je destinacija za prave gurmane.
                    Naši kuvari koriste samo najsvežije sastojke kako bi Vam pružili autentične ukuse koji će Vas ostaviti bez daha.
                    Bez obzira da li ste ljubitelj mesa, ribe, paste ili preferirate vegetarijanske specijalitete,
                    naš jelovnik nudi nešto za svakog. Zajedno sa našim bogatim izborom vina i osvežavajućih napitaka,
                    garantujemo da će Vaše gastronomsko iskustvo u Tramonto biti nezaboravno.</p>
            </div>
            <div className="dorucak" onClick={() => handleClick("jelovnik/dorucak")}>
                <h1>Dorucak</h1>
                <p>Počnite dan uz našu selekciju ukusnih doručaka, obogaćenih svežim sastojcima i kvalitetnim kafama.</p>
            </div>
            <div className="jela-od-juneceg-mesa">
                <h1>jela od juneceg mesa</h1>
                <p>Za prave gurmane, naša selekcija bifteka pruža vrhunski doživljaj mesa.</p>
            </div>
            <div className="jela-od-svinjskog-mesa">
                <h1>Jela od svinjskog mesa</h1>
                <p>Pažljivo izabrana i taman odležana mesa pružaju bogatstvo ukusa koje će zadovoljiti i najistančanija nepca.</p>
            </div>
            <Footer />
        </div>
    )
}

export default JelovnikPage
