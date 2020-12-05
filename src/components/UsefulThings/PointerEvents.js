import React from 'react';
import '../../styles/pointerevents.css';
import SyntaxHiglighterContainer from './../SyntaxHiglighterContainer';

const PointerEvents = () => {

    let codeStringCss =`
    .pointerevents {
        min-height: 50vh;
        line-height: 50vh;
       margin: 0 auto;
       text-align: center;
    }
    
    .pointerevents > button {
        box-shadow: 0px 0px 0px 2px #9fb4f2;
        background:linear-gradient(to bottom, 
            #7892c2 5%, #476e9e 100%);
        background-color:#7892c2;
        border-radius:10px;
        border:1px solid #4e6096;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size:20px;
        padding: 2rem 4rem;
        text-decoration:none;
        text-shadow:0px 1px 0px #283966;
       animation: fadebutton 3s ease-out forwards;
    }
    
    @keyframes fadebutton{
        from {
            opacity: 1;
            pointer-events: visible;
        }
        to {
            opacity: 0.1;
            pointer-events: none;
        }
    }
    `;

    let codeStringHtml =`
    <div className='pointerevents'>
        <button>Submit</button>
    </div>
    `;

    return (
        <div>
            <p>Pointer event: all. When the animation is complete, the button is not clickable anymore. </p> 
            <button onClick={()=>{window.location.reload()}}>Animation</button>
            <div className='pointerevents'>
                <button>Submit</button>
            </div>
            <SyntaxHiglighterContainer codeStringCss={codeStringCss} codeStringHtml={codeStringHtml}/>  
        </div>
    )
}

export default PointerEvents;