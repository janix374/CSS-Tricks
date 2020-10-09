import React from 'react';
import '../../styles/pointerevents.css';

const PointerEvents = () => {

    return (
        <div>
            <p>Pointer event: all. When the animation is complete, the button is not clickable anymore. </p> 
            <button onClick={()=>{window.location.reload()}}>Animation</button>
            <div className='pointerevents'>
                <button>Submit</button>
            </div>
        </div>
    )
    
}

export default PointerEvents;