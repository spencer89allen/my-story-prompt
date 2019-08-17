import React from 'react';

import './SideMenuBox.css';


const SideMenuBox = (props) => {

    let drawerClasses = 'sideDrawer';
    if(props.display) {
        drawerClasses = 'sideDrawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href='/'>BLOG</a></li>
                <li><a href='/'>MOTIVATORS</a></li>
                <li><a href='/'>CONTACT</a></li>
                <li><a href='/'>ABOUT</a></li>
            </ul>
        </nav>
    )
};

export default SideMenuBox;