import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default function SyntaxHiglighterContainer({codeStringCss, codeStringHtml}) {
    return (
            <div className="code">

                <p className="sintaxtitle">CSS and HTML</p>
        
                <div className="syntaxhtml">
                    <SyntaxHighlighter language="html" >
                        {codeStringHtml}
                    </SyntaxHighlighter> 
                </div>

                <div className="syntaxcss">
                    <SyntaxHighlighter language="css" >
                        {codeStringCss}
                    </SyntaxHighlighter> 
                </div>

            </div>  
    )
}
