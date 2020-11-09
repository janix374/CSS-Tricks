import React from 'react';
import '../../styles/cup.css';
import SyntaxHiglighterContainer from './../SyntaxHiglighterContainer';

const Cup = () => {

    let codeStringCss =`
    .centertext {
        width: 100%;
        height: 50vh;
        background-color: lightblue;
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
               <div className="cup"></div>
            </div>

            <SyntaxHiglighterContainer codeStringCss={codeStringCss} codeStringHtml={codeStringHtml}/>

        </div>
    )
}

export default Cup;