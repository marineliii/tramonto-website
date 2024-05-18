import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.png';
import menuIcon from "../../assets/menu-icon.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const [activeItem, setActiveItem] = useState(location.pathname.replace("/", "") || "");

    const toggleMenu = () => {
        setMobileMenu(prevState => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (viewportWidth > 768) {
                const scrollTop = window.pageYOffset;
                setIsScrolled(scrollTop > 0);
            } else {
                setIsScrolled(false);
            }
        };

        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [viewportWidth]);

    const handleClick = (putanja) => {
        setActiveItem(putanja);
        navigate(`/${putanja}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <nav className={`container ${isScrolled ? 'scrolled' : ''}`}>
            <a href="/" className="desktop-logo"> <img src={logo} alt="logo img" className='logo' /></a>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li
                    className={activeItem === "" ? "active" : ""}
                    onClick={() => handleClick("")}
                >
                    Početna
                </li>
                <li
                    className={activeItem === "jelovnik" ? "active" : ""}
                    onClick={() => handleClick("jelovnik")}
                >
                    Jelovnik
                </li>
                <li
                    className={activeItem === "o-nama" ? "active" : ""}
                    onClick={() => handleClick("o-nama")}
                >
                    O nama
                </li>
                <li
                    className={activeItem === "galerija" ? "active" : ""}
                    onClick={() => handleClick("galerija")}
                >
                    Galerija
                </li>
                <li
                    className={activeItem === "contact" ? "active" : ""}
                    onClick={() => handleClick("contact")}
                >
                    Kontakt
                </li>
                <a href="/" className="mobile-logo"><img src={logo} alt="logo img" className='logo' /></a>
            </ul>
            <img src={menuIcon} alt="menu icon" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
