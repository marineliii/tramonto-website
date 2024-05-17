import { Card } from "../../Components/Card/Card"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import pljeskavica from "../../assets/junetina-cover.jpg"
import "./JunetinaPage.css"


const JunetinaPage = () => {

    return (
        <div className="cela-strana">
            <Navbar />
            <div className="junetina-header">
                <h1>Jela od junećeg mesa</h1>
            </div>
            <div className="junetina-menu">
                <Card title="Primer jela bez slike" description="100% juneće meso 200g, kajmak 100g, lepinja, crni luk" cena="980 rsd" />
                <Card imgSrc={pljeskavica} title="Juneća pljeskavica na kajmaku" description="100% juneće meso 200g, kajmak 100g, lepinja, crni luk" cena="980 rsd" />
            </div>
            <Footer />
        </div>
    )
}

export default JunetinaPage
