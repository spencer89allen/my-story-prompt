import React, { Component } from 'react';

import './Footer.css'



class Footer extends Component {



    render() {
        return (
            <div className='footer'>
                <label className='footHeader'>Do You Need Some Motivation or Insights?</label>
                <form className='email'>
                    <input type="text"
                        id="fname"
                        name="fname"
                        placeholder="FIRST NAME" />
                    <input type="text"
                        id="email"
                        name="email"
                        placeholder="EMAIL" />
                    <input type="submit"
                        value="SUBSCRIBE" />
                </form>
            </div>
        )
    }
}

export default Footer;