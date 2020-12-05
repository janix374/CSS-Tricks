import React from 'react';
import '../../styles/cliping.css';
import SyntaxHiglighterContainer from './../SyntaxHiglighterContainer';

const Cliping = () => {

    let codeStringCss =`
    .cliping {
        width: 100%;
        min-height: 50vh;
        background-color: rgb(2, 221, 248);
        lip-path: polygon(56% 0, 78% 39%, 
            65% 87%, 8% 100%, 0% 38%);
        position: relative;
    }
    `;

    let codeStringHtml =`
    <div className='cliping'></div>
    `;

    return (
        <div>
            <p>The clip-path property allows you to make complex shapes in CSS by clipping an element to a basic shape (circle, ellipse, polygon, or inset)</p> 
            <p>... go to site <a href="https://bennettfeely.com/clippy/">https://bennettfeely.com/clippy/</a></p>
            <div className='cliping'></div>
            <SyntaxHiglighterContainer codeStringCss={codeStringCss} codeStringHtml={codeStringHtml}/> 
        </div>
    )
}

export default Cliping;