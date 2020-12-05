import React from 'react';
import '../../styles/centertext.css';
import SyntaxHiglighterContainer from './../SyntaxHiglighterContainer';

const CenterText = () => {

    let codeStringCss =`
    .centertext {
        width: 100%;
        height: 50vh;
        text-align: center;
        line-height: 50vh;
    }`;

    let codeStringHtml =`
    <div className='centertext'>
        <div><p>centar text</p> </div>
    </div>
    `;

    return (
        <div>
            <p>Line-height to center text in the middle of div</p> 
            <div className="centertext">
               <div><p>centar text</p> </div>
            </div>
            <SyntaxHiglighterContainer codeStringCss={codeStringCss} codeStringHtml={codeStringHtml}/>
        </div>
    )
}

export default CenterText;