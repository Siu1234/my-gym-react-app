// Import the useState hook from React for managing state
import { useState } from "react";

// Define the main App component
export default function Timer() {
  // Initialize state variables for timer and timeInterval
  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);

  // Function to start the timer
  const startTimer = () => {
    // Use setInterval to update the timer every 1000 milliseconds (1 second)
    setTimeInterval(setInterval(() => {
      // Update the timer by incrementing the previous value by 1
      setTimer((prev) => prev + 1);
    }, 1000));
  }

  // Function to pause the timer
  const pauseTimer = () => {
    // Clear the interval to stop the timer from updating
    clearInterval(timeInterval);
  }

  // Function to reset the timer
  const resetTimer = () => {
    // Reset the timer value to 0
    setTimer(0);
    // Clear the interval to stop the timer
    clearInterval(timeInterval);
  }

  // Render the timer and buttons in the component
  return (
    <div style={{ position: "sticky", top: "0", backgroundColor: "white" }}>
      <h3>Timer: {timer}</h3>
      <div className="btn-wrapper">
        {/* Button to start the timer */}
        <button style={{ width: "60px", height: "40px" }} onClick={startTimer}>Start</button>&nbsp;&nbsp;&nbsp;
        {/* Button to pause the timer */}
        <button style={{ width: "60px", height: "40px" }} onClick={pauseTimer}>Pause</button>&nbsp;&nbsp;&nbsp;
        {/* Button to reset the timer */}
        <button style={{ width: "60px", height: "40px" }} onClick={resetTimer}>Reset</button>&nbsp;&nbsp;&nbsp;
      </div>
      <hr width="100%" size="2"></hr>
    </div>
  );
}