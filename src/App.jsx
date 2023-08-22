import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="App">
      <div className="timer-container">
        <div className="timer">
          {String(Math.floor(time / 3600)).padStart(2, '0')}:
          {String(Math.floor((time % 3600) / 60)).padStart(2, '0')}:
          {String(time % 60).padStart(2, '0')}
        </div>
        <div className="timer-label">HH:MM:SS</div>
      </div>
      <div className="button-container">
  <button
    className={`button ${isRunning ? 'stop' : 'start'}`}
    onClick={handleToggle}
  >
    {isRunning ? 'Stop' : 'Start'}
  </button>
  <button className="buttonreset" onClick={handleReset}>
    Reset
  </button>
</div>
    </div>
  );
}

export default App;
