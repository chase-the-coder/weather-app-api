import React from 'react';
import '../styles/Footer.css';
import github from '../images/github.svg'

const Footer = () => {
	return (
        <>
       
		<div className="footer">
            <div className='footer-description'>
			Made by{' '}
			<a className="footer-links" href="https://chasethecoder.com/" target="blank">
				Chase
			</a>
            </div>
            <a href="https://github.com/chase-the-coder/react-weather-api-new" target="blank">
            <img src={github} alt="github-icon" />
            </a>
            
		</div>
        </>
	);
};

export default Footer;
