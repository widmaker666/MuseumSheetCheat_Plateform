import React from 'react';
import logo from '../assets/images/logo.png';

const Logo = () => {
    return (
        <div>
            <img className='logo' src={logo} alt="logo" />            
        </div>
    );
};

export default Logo;