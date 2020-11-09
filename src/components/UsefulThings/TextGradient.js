import React from 'react';
import '../../styles/textgradient.css';
import SyntaxHiglighterContainer from './../SyntaxHiglighterContainer';

const TextGradient = () => {

    let codeStringCss =`
    .textgradient {
        font-size: 100px; 
        font-weight: bold;
        background: linear-gradient(to left, rgb(71, 59, 177), rgb(167, 130, 162));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        min-height: 50vh;
      }
    `;

    let codeStringHtml =`
    <div className='textgradient'>
        <p>Some text</p>
    </div>
    `;

    return (
        <div>
            <p>Text Gradient</p> 

            <div className='textgradient'>
               <p>Some text</p>
            </div>

            <SyntaxHiglighterContainer codeStringCss={codeStringCss} codeStringHtml={codeStringHtml}/>    

        </div>
    )
}

export default TextGradient;