import React from 'react';
import './Footer.modules.css';


const Footer = () => {
    return(
        <footer>
            <ul className='SocialMedia'>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li><a href="https://www.youtube.com/">YouTube</a></li>
            </ul>
            <ul>
                <li>News</li>
                <li>Jobs</li>
                <li>Impressum</li>
            </ul>
        </footer>
    )
};

export default Footer;