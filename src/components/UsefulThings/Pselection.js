import React from 'react';
import '../../styles/pselection.css';
import SyntaxHiglighterContainer from './../SyntaxHiglighterContainer';

const Pselection = () => {

    let codeStringCss =`
    .pselection{
        min-height: 50vh;
    }
    
    .pselection > p::selection {
        background-color: rgb(211, 89, 89);
        color: white;
    }
    
    .pselection > p::first-letter {
        font-size: 2em;
        font-weight: bold;
    }
    `;

    let codeStringHtml =`
    <div className='pselection'>
        <p>text</p>
    </div>
    `;

    return (
        <div>
            <p>When you select text background is not default values (blue).</p> 
            <div className='pselection'>
               <p>Lorem ipsum - Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <SyntaxHiglighterContainer codeStringCss={codeStringCss} codeStringHtml={codeStringHtml}/>  
        </div>
    )
}

export default Pselection;