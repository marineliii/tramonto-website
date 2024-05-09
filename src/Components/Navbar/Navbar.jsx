/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';



const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <nav className={`container ${isScrolled ? 'scrolled' : ''}`}>
            <a href="/"> <img src={logo} alt="logo img" className='logo' /></a>
            <ul>

                <a href="/"><li>Početna</li></a>
                <li>Jelovnik</li>
                <li>O nama </li>
                <li>Galerija</li>
                <li><Link to='contact' smooth={true} offset={-300} duration={500}>Kontakt</Link></li>



            </ul>
        </nav >
    )
}

export default Navbar
