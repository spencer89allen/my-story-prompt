import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Components/Nav/Nav'
import LandingPage from './Components/LandingPage/LandingPage';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';


export default (

    <div>

        <Route component={ Nav } path='/' />

        <Switch>
            <Route component={ Register } path='/register' />
            <Route component={ Login } path='/login' />

            <Route component={ LandingPage } path='/' />
        </Switch>
    </div>
)