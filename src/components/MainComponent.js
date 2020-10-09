import React from 'react';
import {
    Switch,
    Route
  } from 'react-router-dom';
import Home from './UsefulThings/Home';
import PointerEvents from './UsefulThings/PointerEvents';

const MainComponent = () => {
    
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/style1">
                    <PointerEvents />
                </Route>
            </Switch>
        </div>
    )
    
}

export default MainComponent;