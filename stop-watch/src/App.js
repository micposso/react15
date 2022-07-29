import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // setup hooks
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  // similar to componentdidmount, componentwillmout and componentupdate, it detect a change on the state
  useEffect(() => {
    let interval = null;

    if(timerOn) {
      interval = setInterval(() => {
        setTime(previousTime => previousTime + 10);
      }, 10)
    } else {
      clearInterval(interval);
    }

    return () =>  clearInterval(interval);

  }, [timerOn]);

  return (
    <div className="App">
      <div className="timer-containter">
        <div className="time">{time}</div>
        <div className="buttons-container">
          <button onClick={() => setTimerOn(true)}>Start</button>
          <button onClick={() => setTimerOn(false)}>Pause</button>
          <button onClick={() => setTimerOn(true)}>Resume</button>
          <button onClick={() => setTime(0)}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
