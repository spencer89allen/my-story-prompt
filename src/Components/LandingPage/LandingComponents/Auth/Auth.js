import React, { Component } from 'react';

import './Auth.css'



class Auth extends Component {



    render() {
        return (
            <div className='auth'>

                <div className='authHeader'>
                    <div className='title'>
                        <p>My Story Prompt</p>
                    </div>
                    <div className='subTitle'>
                        <p>A Step-by-Step, Fun and Easy Way to Write Your Personal History</p>
                    </div>
                    <br />
                    <div className='loginButtons'>
                        <button>Log In</button>
                        <button>Get Started</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Auth;