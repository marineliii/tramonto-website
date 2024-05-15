/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClick = (putanja) => {
        navigate(`/${putanja}`);
    };

    useEffect(() => {
        // Reset scroll position to top on navigation
        window.scrollTo(0, 0);
    }, [handleClick]);

    return (
        <nav className={`container ${isScrolled ? 'scrolled' : ''}`}>
            <a href="/"> <img src={logo} alt="logo img" className='logo' /></a>
            <ul>
                <li onClick={() => handleClick(" ")}>Početna</li>
                <li onClick={() => handleClick("jelovnik")}>Jelovnik</li>
                <li onClick={() => handleClick("o-nama")}>O nama </li>
                <li onClick={() => handleClick("galerija")}>Galerija</li>

                <li><Link to='contact' smooth={true} offset={-300} duration={500}>Kontakt</Link></li>
            </ul>
        </nav >
    );
};

export default Navbar;
