import React, { Component } from 'react';

import './Nav.css';
import logo from '../../assests/transparent copy.png';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import SideMenuBox from '../SideMenuBox/SideMenuBox';
import Backdrop from '../Backdrop/Backdrop';


class Nav extends Component {

    state = {
        sideDrawerOpen: false,
      }
    
      drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return{ sideDrawerOpen: !prevState.sideDrawerOpen } 
        })
      };
    
      backdropClickHandler = () => {
        this.setState({
          sideDrawerOpen: false,
        })
      }


    render() {

        let backdrop = null;
        if(this.state.sideDrawerOpen) {
          backdrop = <Backdrop closeBackdrop={this.backdropClickHandler}/>;
        }

        return (
            <span className='navbar'>
                <img src={logo} alt='' className='navebarImage' />
                <div className='hamburgerButton'>
                    <HamburgerButton menuBoxToggle={this.drawerToggleClickHandler}/>
                </div>
                <SideMenuBox display={this.state.sideDrawerOpen}/>
                {backdrop}
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