import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {

    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => clearInterval(interval);

  }, [running]);


  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);


  return (
    <div className="container">

      <h1>React Stopwatch</h1>

      <div className="timer">
        {String(hours).padStart(2,"0")} :
        {String(minutes).padStart(2,"0")} :
        {String(seconds).padStart(2,"0")} :
        {String(milliseconds).padStart(2,"0")}
      </div>


      <div className="buttons">

        <button onClick={() => setRunning(true)}>
          Start
        </button>

        <button onClick={() => setRunning(false)}>
          Pause
        </button>

        <button onClick={() => {
          setRunning(false);
          setTime(0);
        }}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default App;