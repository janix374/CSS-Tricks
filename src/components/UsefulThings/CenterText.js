import React from 'react';
import '../../styles/centertext.css';

const CenterText = () => {
    return (
        <div>
            <p>Line-height to center text in the middle of div</p> 

            <div className='centertext'>
               <p>Text in center of div</p>
            </div>

        </div>
    )
}

export default CenterText;