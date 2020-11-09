import React from 'react';
import '../../styles/cup.css';
import SyntaxHiglighterContainer from './../SyntaxHiglighterContainer';

const Cup = () => {

    let codeStringCss =`
    .cup{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%,-50%);
        width: 150px;
        height: 180px;
        border: 6px solid #262626;
        border-top: 2px solid transparent;
        border-radius: 15px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: url('../water.jpg');
        background-repeat: repeat-x;
        animation: animate 10s linear infinite;
        box-shadow: 0 0 0 6px #fff, 0 20px 35px rgba(0, 0, 0, 1);
    }
    
    .cup:before{
        content: '';
        position: absolute;
        width: 50px;
        height: 80px;
        border: 6px solid #fff;
        right: -68px;
        top: 30px;
        border-top-right-radius: 35px;
        border-bottom-right-radius: 35px;
    }
    
    @keyframes animate{
        0%
        {
            background-position: 0 100px;
        }
        10%
        {
            background-position: 0 100px;
        }
        40%
        {
            background-position: 1000px -70px;
        }
        0%
        {
            background-position: 2000px -80px;
        }
    }`;

    let codeStringHtml =`
    <div className="centertext">
        <div className="cup"></div>
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