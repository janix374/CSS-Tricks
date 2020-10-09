import React from 'react';
import '../../styles/invertcolor.css';

const InvertColor = () => {
    return (
        <div>
            <p>Invert the colors on the screen</p> 

            <div className='invertcolor'>
               <p>background-color: lightblue;</p>
               <p>color: black;</p>
            </div>

        </div>
    )
}

export default InvertColor;