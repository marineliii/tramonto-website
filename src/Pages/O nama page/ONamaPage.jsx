import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import Slika1 from "../../assets/galerija.png"
import Slika2 from "../../assets/picerija.jpg"
import './ONamaPage.css'


const ONamaPage = () => {
    return (
        <div className="cela-strana">
            <Navbar />
            <div className="header">
                <h1>Naša priča</h1>
            </div>
            <div className="restoran">
                <div className="text-restoran">
                    <h1>Restoran Tramonto</h1>
                    <p>Nastao 2019, sa idejom da postane mesto koje će zadovoljiti najistančanija
                        nepca tokom dana i postati epicentar nezaboravnog provoda noću.</p>
                </div>
                <div className="slika-restoran">
                    <img src={Slika1} alt="slika restorana" />
                </div>
            </div>
            <div className="picerija">
                <div className="text-picerija">
                    <h1>Picerija Tramonto</h1>
                    <p>Tramonto, čarobna picerija u srcu Kraljeva,
                        Gde se mirisi sastaju s toplinom i veseljem sveta.
                        Pod svetlošću zvezda, u večernjoj idili,
                        Dolaze ljudi da osete ukus čarobne hrane.

                        Na ivici užarene peći, majstor svog zanata stoji,
                        Smeška se dok razvlači testo i sastavlja čaroliju.
                        Sir se topi, šunke plešu, povrće šapće svoju pesmu,
                        Dok se pizza rađa kao delo umetnika.

                        U uglovima, porodice se smeju i pričaju priče,
                        Dok zaljubljeni parovi dele zalogaje u tajnosti.
                        Prijatelji se okupljaju, deleći radost i smeh,
                        U okruženju gde svaka kriška nosi deo sreće.

                        Tramonto nije samo picerija, već deo priče grada,
                        Mesto gde se tradicija spaja sa modernim dahom.
                        U srcu Kraljeva, Tramonto sjaji poput zvezde,
                        Pružajući ukusno putovanje kroz svet italijanske hrane.</p>
                </div>
                <div className="slika-picerija">
                    <img src={Slika2} alt="picerija slika" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ONamaPage
