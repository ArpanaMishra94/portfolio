import React from 'react'
import './Footer.css';
import { FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='email'>
                        <FaMailBulk size={20} style={{
                            color: '#fff', marginRight: '1rem'
                        }} />
                        <h4>arpanamishra394@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <FaLinkedin size={30} style={{
                        color: '#fff',
                        marginRight: '1rem'
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Footer
