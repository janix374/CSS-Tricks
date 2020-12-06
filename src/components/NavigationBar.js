import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../db/db_componens';

const NavigationBar = () => {
    const [activeClass, setActiveClass] = useState();

    const handleClick = (index ) => {
        setActiveClass(index )
    }
    return (
            <ul>
                {data.map( (comp, index) => {
                    return (<li key={index}><Link onClick={() => handleClick(index)} className={activeClass === index ? "active" : ""} to={"/"+comp.path}>{comp.componentNav}</Link></li>)
                })}
            </ul>
    )
}

export default NavigationBar;