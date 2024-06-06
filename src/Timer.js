import { useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const toggleTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      setTimeInterval(setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000));
    } else {
      setIsTimerRunning(false);
      clearInterval(timeInterval);
    }
  }

  const resetTimer = () => {
    setIsTimerRunning(false);
    clearInterval(timeInterval);
    setTimer(0);
  }

  return (
    <div style={{ position: "sticky", top: "0", backgroundColor: "white" }}>
      <h3>Timer: {timer}</h3>
      <div className="btn-wrapper">
        {!isTimerRunning ? (
          <button
            style={{ width: "60px", height: "40px" }}
            onClick={toggleTimer}
          >
            Start
          </button>
        ) : (
          <button
            style={{ width: "60px", height: "40px" }}
            onClick={toggleTimer}
          >
            Stop
          </button>
        )}
        &nbsp;&nbsp;&nbsp;
        <button
          style={{ width: "60px", height: "40px" }}
          onClick={resetTimer}
        >
          Reset
        </button>
        &nbsp;&nbsp;&nbsp;
      </div>
      <hr width="100%" size="2"></hr>
    </div>
  );
}