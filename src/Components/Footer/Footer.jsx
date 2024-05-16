/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-info'>
                <ul>
                    <li>Toplice Milana 5 Z, Kraljevo</li>
                    <li>08:00-00:00</li>
                </ul>

            </div>
            <div className='footer-text'>
                <h1>zapratite nas</h1>
                <div className='social-icons'>
                    <a href="https://www.facebook.com/p/Tramonto-kafe-restoran-100069418744056/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/restoran_tramonto/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <p>Copyright © TRAMONTO ALL RIGHTS RESERVED</p>
            </div>

        </div>
    )
}

export default Footer
