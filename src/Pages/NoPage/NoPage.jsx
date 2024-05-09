import './NoPage.css'
import logoImg from '../../assets/logo.png';

const NoPage = () => {
    return (
        <div className="no-page container">
            <h1>Opsss...!</h1>
            <p className='no-page-p'>Ova stranica ne postoji <span>:(</span></p>

            <img src={logoImg} alt='Logo Img' className='tramotno-tim-poruka'></img>


        </div>
    )
}

export default NoPage
