import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './UsefulThings/Home';
import data from '../db/db_componens';

const MainComponent = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                {data.map( (comp) => {
                    return ( <Route key={comp.path}  path={"/"+comp.path} component={comp.component} />)
                 })}
            </Switch>
        </div>
    )  
}

export default MainComponent;