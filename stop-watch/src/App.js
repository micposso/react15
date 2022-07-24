import './App.css';
import React, { useState } from 'react';

function App() {
  // setup hooks
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);


  return (
    <div className="App">
      <div className="timer-containter">
        <div className="time">{time}</div>
        <div className="buttons-container">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default App;
