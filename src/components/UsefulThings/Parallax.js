import React, { useState, useEffect } from 'react';
import '../../styles/parallax.css';

const image1 = React.createRef()
const box = React.createRef();
const parralax = React.createRef();

const Parallax = () => {
    
    const [offsetY, setOffsetY] = useState(0);
    const [windowsX, setWindowsX] = useState(window.innerWidth);

    const handleScrolling = () => {
        setOffsetY(window.pageYOffset); 
    }

    const handleResize = () => {
        setWindowsX(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleResize);
        }
    },[]);

    useEffect(() => {
        window.addEventListener('scroll', handleScrolling);
        return () => {
            window.removeEventListener('scroll', handleScrolling);
        }
    },[]);

    const imageDimenzion = (px) => {
        if( offsetY >= 1500 ){
          const number = (offsetY - 1500)/10;
            let half = px/2;
            let decrease = px - number;
            if ( half <= decrease){
                return decrease;
            } else {
                return half;
            }
        }
    }

    const imageMoveX = (px) => {
        if( offsetY >= 1500 ){
            const number = (offsetY - 1500)/3;
              let left = px/2 - 300;
              let decrease = px/2 - 300 - number;
              if ( decrease >= 30 ){
                  return decrease;
              } else {
                  return 30
              }
          } else {
              return px/2-300;
          }
    }

    const translateImageY = (px) => {
        if (px<3370){
            return px*1
        } else {
            return 3370
        }
    }

    const image1Stayle = () => {
        let style={
            width: `${imageDimenzion(300)}px`,
            height: `${imageDimenzion(200)}px`,
            left: `${imageMoveX(windowsX)}px`,
            transform: `translateY(${translateImageY(offsetY)}px)`
        }
        return style
    }

    return (
        <div>
            <p>Parallax</p> 
            <div className='parallax' ref={parralax}>

                <div className='image1' 
                   style={image1Stayle()}
                   ref={image1}
                >
                </div>

                <div className="box" ref={box}>

                </div>
              
            </div>

           
        </div>
    )
}

export default Parallax;