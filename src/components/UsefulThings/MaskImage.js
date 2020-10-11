import React from 'react';
import '../../styles/maskimage.css';
import city from '../../city-1.jpg'

const MaskImage = () => {
    return (
        <div>
            <p>Mask image</p> 

            <div className='maskimage'>
              <img src={city} alt='city'/>
            </div>

        </div>
    )
}

export default MaskImage;