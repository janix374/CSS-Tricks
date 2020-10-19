import React from 'react';
import '../../styles/invertcolor.css';
import SyntaxHighlighter from 'react-syntax-highlighter';

const InvertColor = () => {

    let codeStringCss =`
    .invertcolor {
        background-color: lightblue;
        filter: invert(1) hue-rotate(180deg);
        min-height: 50vh;
        color: black;
    }
    `;

    let codeStringHtml =`
    <div className='invertcolor'>
        <p>background-color: lightblue;</p>
        <p>color: black;</p>
    </div>
    `;

    return (
        <div>
            <p>Invert the colors on the screen</p> 

            <div className='invertcolor'>
               <p>background-color: lightblue;</p>
               <p>color: black;</p>
            </div>

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
export default InvertColor;