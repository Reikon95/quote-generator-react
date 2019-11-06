import React from 'react';
import './App.css';
import face from './face.png';

function App() {
  return (
    <div className="App">

      <div className="container">
      <div className="intro">
      <h2>Welcome to the quote generator. Every 10 seconds, you'll be delivered with a new, inspiring quote from a legendary person.</h2>
      </div>
      <div className="pic">
        <img src={face} alt=''/>
      </div>
      <div className="quote">
      "CSS can do one"
      </div>
        <div className="name">
          Cameron Blackwood (name div)
        </div>
      <div className="bio">
        Cameron Blackwood is a 24 year old software engineer from London, read more about him
      </div>
      </div>
    </div>
  );
}

export default App;
