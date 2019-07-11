import React, { Component } from 'react';

import './Nav.css';
import logo from '../../assests/transparent copy.png';



class Nav extends Component {



    render() {
        return (
            <div className='navbar'>
                <figure className='logoImage'>
                    <img src={logo} alt='' />
                </figure>
            </div>
        )
    }
}

export default Nav;