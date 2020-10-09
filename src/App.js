import React from 'react';
import MainComponent from './components/MainComponent';
import './styles/app.css';



function App() {
  return (

    <div className="App">

    <div className="grid-container">

      <div className="item1"><p>header</p></div>

      <div className="item2">

        <div className="main">
          <MainComponent />
        </div>
        <div className="navigation">fsdfsdf</div>

      </div>

      <div className="item3">Footer</div>

    </div>
      

    </div>
  );
}

export default App;
