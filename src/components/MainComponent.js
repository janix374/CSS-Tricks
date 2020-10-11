import React from 'react';
import {
    Switch,
    Route
  } from 'react-router-dom';
import Home from './UsefulThings/Home';
import PointerEvents from './UsefulThings/PointerEvents';
import CenterText from './UsefulThings/CenterText';
import Pselection from './UsefulThings/Pselection';
import InvertColor from './UsefulThings/InvertColor';
import TextGradient from './UsefulThings/TextGradient';
import ImageColorEfect from './UsefulThings/ImageColorEfect';
import Cliping from './UsefulThings/Cliping';
import MaskImage from './UsefulThings/MaskImage';
import StoryBooks from './UsefulThings/StoryBooks';

const MainComponent = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/style1" component={PointerEvents} />
                <Route exact path="/style2" component={CenterText} />
                <Route exact path="/style3" component={Pselection} />
                <Route exact path="/style4" component={InvertColor} />
                <Route exact path="/style5" component={TextGradient} />
                <Route exact path="/style6" component={ImageColorEfect} />
                <Route exact path="/style7" component={Cliping} />
                <Route exact path="/style8" component={MaskImage} />
                <Route exact path="/style9" component={StoryBooks} />
            </Switch>
        </div>
    )  
}

export default MainComponent;