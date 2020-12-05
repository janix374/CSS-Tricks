import React from 'react';
import { Link } from 'react-router-dom';
import data from '../db/db_componens';

const NavigationBar = () => {
    return (
            <ul>
                {data.map( (comp) => {
                    return (<li key={comp.path}><Link to={"/"+comp.path}>{comp.componentNav}</Link></li>)
                })}
            </ul>
    )
}

export default NavigationBar;