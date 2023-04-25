import './HeroImg.css';

import React from 'react'
import btc from '../assets/btc.png';
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src={btc} alt='' />
            </div>
            <div className='content'>
                <p>Hi, I'm a Front End Developer</p>
                <h1>React Developer</h1>
                <div>
                    <Link to='/project' className='btn'>Projects</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg
