import React from 'react';
import '../../styles/centertext.css';
import SyntaxHighlighter from 'react-syntax-highlighter';

const CenterText = () => {

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
               <div><p>centar text</p> </div>
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

export default CenterText;