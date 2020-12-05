import React, { useState } from 'react';
import MainComponent from './components/MainComponent';
import NavigationBar from './components/NavigationBar';
import './styles/app.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { IoDesktopSharp } from "react-icons/io5";

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="App">
      <div className="grid-container">

        <div className="item1"><h1>CSS - TRICKS</h1></div>

        <div className="item2">
         <Router>
            <div className="main">
              <MainComponent />
            </div>
            <div className="navigation">
              <div className="navigation-menu-button"><button title="menu" onClick={()=>{setShowMenu(!showMenu)}}><IoDesktopSharp/></button></div>
              {showMenu ? (<NavigationBar/>):('')}
            </div>
          </Router>
        </div>

        {/* <div className="item3"><p> </p></div> */}
        
      </div>
    </div>
  );
}

export default App;
