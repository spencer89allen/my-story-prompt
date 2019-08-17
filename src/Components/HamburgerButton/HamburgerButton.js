import React from 'react';

import './HamburgerButton.css';



const HamburgerButton = (props) => (
    <button className='toggle-button' onClick={() => props.menuBoxToggle()}>
        <div className='toggle-button_line'></div>
        <div className='toggle-button_line'></div>
        <div className='toggle-button_line'></div>
    </button>
);

export default HamburgerButton;