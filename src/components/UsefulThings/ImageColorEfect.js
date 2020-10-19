import React from 'react';
import '../../styles/imagecolorefect.css';
import SyntaxHighlighter from 'react-syntax-highlighter';

const ImageColorEfect = () => {

    let codeStringCss =`
    .imagecolorefect {
        background-image: url('picture');
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-color: rgb(64, 165, 64);
        background-blend-mode: screen;
        min-height: 50vh;
    }
    `;

    let codeStringHtml =`
    <div className="imagecolorefect"></div>
    `;

    return (
        <div>
            <p>Image color effect</p> 

            <div className="imagecolorefect"></div>

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

export default ImageColorEfect;