import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    
    return (
        <ul>
            <li>
                <Link to='/style1'>Pointer-events</Link>
            </li>
            <li>
                <Link to='/style2'>Center text</Link>
            </li>
            <li>
                <Link to='/style3'>Selected text</Link>
            </li>
            <li>
                <Link to='/style4'>Invert color</Link>
            </li>
            <li>
                <Link to='/style5'>Text Gradient</Link>
            </li>
            <li>
                <Link to='/style6'>Image color effect</Link>
            </li>
            <li>
                <Link to='/style7'>Cliping</Link>
            </li>
            <li>
                <Link to='/style8'>Mask Image</Link>
            </li>
        </ul>
    )
    
}

export default NavigationBar;