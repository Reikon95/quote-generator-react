import React from 'react';
import './App.css';
import face from './face.png';

function App() {
  return (
    <div className="App">

      <div className="container">
      <div className="intro">
      Welcome to the quote generator. Every 10 seconds, you'll be delivered with a new, inspiring quote from a legendary person.
      </div>
      <div className="pic">
        <img src={face} alt=''/>
      </div>
      <div className="quote">
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
      </div>
        <div className="name">
          Name here
        </div>
      <div className="bio">
        Bio goes here
      </div>
      </div>
    </div>
  );
}

export default App;
