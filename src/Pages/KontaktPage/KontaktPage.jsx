import Footer from "../../Components/Footer/Footer"
import Kontakt from "../../Components/Kontakt/Kontakt"
import Navbar from "../../Components/Navbar/Navbar"
import "./KontaktPage.css"

const KontaktPage = () => {
    return (
        <div className="cela-strana">
            <Navbar />
            <div className="kontakt-header">
                <h1>Kontakt</h1>
            </div>

            <Kontakt />
            <Footer />

        </div>
    )
}

export default KontaktPage
