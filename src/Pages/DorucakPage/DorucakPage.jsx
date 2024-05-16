import { Card } from "../../Components/Card/Card"
import Navbar from "../../Components/Navbar/Navbar"
import svinja from "../../assets/svinja-cover.jpg"
import dorucakSlika1 from "../../assets/dorucak-cover.jpg"
import "./DorucakPage.css"
import Footer from "../../Components/Footer/Footer"

const DorucakPage = () => {
    return (
        <div className="cela-strana">
            <Navbar />
            <div className="dorucak-header">
                <h1>Doručak</h1>
            </div>
            <div className="dorucak-menu">
                <Card imgSrc={dorucakSlika1} imgAlt="slika dorucak" title="jaja" description="Przena jaja na oko" cena="390 rsd" />
                <Card imgSrc={dorucakSlika1} imgAlt="slika dorucak" title="jaja" description="Przena jaja na oko" />
                <Card imgSrc={dorucakSlika1} imgAlt="slika dorucak" title="jaja" description="Przena jaja na oko" />
                <Card imgSrc={dorucakSlika1} imgAlt="slika dorucak" title="jaja" description="Przena jaja na oko" />
                <Card imgSrc={svinja} imgAlt="slika dorucak" title="jaja" description="Przena jaja na oko" />

            </div>
            <Footer />
        </div>
    )
}

export default DorucakPage
