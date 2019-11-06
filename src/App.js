import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="intro">
      Welcome to the sports quote generator. Every 10 seconds, you'll be delivered with a new, inspiring quote from a legendary athelete.
      </div>
      <div className="container">
      <div className="pic">
        Picture will go here
      </div>
      <div className="quote">
        Quote will go here
      </div>
      <div className="bio">
        Bio goes here
      </div>
      <div className="wiki">
        Link to Wikipedia goes here
      </div>
      </div>
    </div>
  );
}

export default App;
