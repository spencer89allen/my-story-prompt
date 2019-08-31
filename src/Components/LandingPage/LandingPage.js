import React, { Component } from 'react';

import './LandingPage.css'
import PhotoBanner from './LandingComponents/PhotoBanner/PhotoBanner';
import Auth from './LandingComponents/Auth/Auth';



class LandingPage extends Component {



    render() {
        return(
            <div className='landingPage'>
                <Auth />
                <PhotoBanner />
            </div>
        )
    }
}

export default LandingPage;