import React from 'react';
import '../../styles/maskimage.css';
import city from '../../city-1.jpg';
import SyntaxHiglighterContainer from './../SyntaxHiglighterContainer';

const MaskImage = () => {

    let codeStringCss =`
    .maskimage {
        min-height: 50vh;
    }
    
    .maskimage > img {
            max-width: 100%;
            max-height: 100%;
            display: block;
            mask-image: url('../mask.png');
            -webkit-mask-image: url('../mask.png');
            mask-position: center;
    }
    `;

    let codeStringHtml =`
    <div className='maskimage'>
        <img src={picture} alt='city'/>
    </div>
    `;

    return (
        <div>
            <p>The mask CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points</p> 
            <div className='maskimage'>
              <img src={city} alt='city'/>
            </div>
            <SyntaxHiglighterContainer codeStringCss={codeStringCss} codeStringHtml={codeStringHtml}/>  
        </div>
    )
}

export default MaskImage;