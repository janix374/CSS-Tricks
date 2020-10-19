import React from 'react';
import '../../styles/cliping.css';
import SyntaxHighlighter from 'react-syntax-highlighter';

const Cliping = () => {

    let codeStringCss =`
    .cliping {
        width: 100%;
        min-height: 50vh;
        background-color: rgb(2, 221, 248);
        clip-path: polygon(100% 0, 100% 52%, 38% 100%, 0 100%, 0 0);
        position: relative;
    }
    `;

    let codeStringHtml =`
    <div className='cliping'></div>
    `;

    return (
        <div>
            <p>Cliping, clip-path: polygon... go to site https://bennettfeely.com/clippy/</p> 

            <div className='cliping'></div>

            <div className="code">
                <p>CSS and HTML</p>
                <SyntaxHighlighter language="css" >
                    {codeStringCss}
                </SyntaxHighlighter> 
                
                <SyntaxHighlighter language="html" >
                    {codeStringHtml}
                </SyntaxHighlighter> 
            </div>  

        </div>
    )
}

export default Cliping;