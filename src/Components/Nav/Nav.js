import React, { Component } from 'react';

import './Nav.css';
import logo from '../../assests/transparent copy.png';
import hamMenu from '../../assests/Hamburger_icon.svg.png'



class Nav extends Component {



    render() {
        return (
            <span className='navbar'>
               <img src={ logo } alt='' className='navebarImage'/>
               
               <div className='menuBar'>
                    <div className='menuItem'>
                        <p>BLOG</p>
                    </div>
                    <div className='menuItem'>
                        <p>MOTIVATORS</p>
                    </div>
                    <div className='menuItem'>
                        <p>CONTACT</p>
                    </div>
                    <div className='menuItem'>
                        <p>ABOUT</p>
                    </div>
               </div>
            </span>
        )
    }
}

export default Nav;