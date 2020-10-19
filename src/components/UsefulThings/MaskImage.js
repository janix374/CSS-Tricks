import React from 'react';
import '../../styles/maskimage.css';
import city from '../../city-1.jpg';
import SyntaxHighlighter from 'react-syntax-highlighter';

const MaskImage = () => {

    let codeStringCss =`
    .maskimage {
        background-color: black;
        min-height: 50vh;
    }
    
    .maskimage > img {
            max-width: 100%;
            max-height: 100%;
            display: block;
            mask-image: url('../mask.png');
            -webkit-mask-image: url('../mask.png');
    }
    `;

    let codeStringHtml =`
    <div className='maskimage'>
        <img src={picture} alt='city'/>
    </div>
    `;

    return (
        <div>
            <p>Mask image</p> 

            <div className='maskimage'>
              <img src={city} alt='city'/>
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

export default MaskImage;