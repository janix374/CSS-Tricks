import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default function SyntaxHiglighterContainer({codeStringCss, codeStringHtml}) {
    return (
        <div className="code">
            <p>CSS and HTML</p>

            <SyntaxHighlighter language="html" >
                {codeStringHtml}
            </SyntaxHighlighter> 

            <SyntaxHighlighter language="css" >
                {codeStringCss}
            </SyntaxHighlighter> 
        </div>  
    )
}
