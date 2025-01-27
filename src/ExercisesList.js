import React from 'react'
import { useState } from 'react'

const ExercisesList = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  return (
    <div>
      <button style={{ width: "150px", height: "40px" }} onClick={() => setIsOpen1(!isOpen1)}>SCAA</button>
      {isOpen1 && (
        <div style={{ border: '1px solid black', margin: "10px 100px 10px 100px"}}>
          <p>Rack Squat 10下 20 30 35<input type="checkbox" /></p>
          <p>RDL 10下 10 15 20 15 <input type="checkbox" /></p>
          <p>Lat Pull Down 10下 32 39 45 39 <input type="checkbox" /></p>
          <p>Seated Row 10下 25kg 30kg <input type="checkbox" /></p>
          <p>Cable Tricep Extension 10下 5 6 7 7 <input type="checkbox" /></p>
          <p>Leg Extension Combo 30 20lbs 10 100lbs <input type="checkbox" /></p>
        </div>
      )}
      <p>Home GYM</p>
      <button style={{ width: "150px", height: "40px" }} onClick={() => setIsOpen2(!isOpen2)}>Chest</button>
      {isOpen2 && (
        <div style={{ border: '1px solid black', margin: "10px 100px 10px 100px"}}>
          <p>卧推 8下 (2.5) 3.5 3.5 3.5 <input type="checkbox" /></p>
          <p>上斜卧推 8下 2.5 2.5 2.5 <input type="checkbox" /></p>
        </div>
      )}
      <p></p>
      <button style={{ width: "150px", height: "40px" }} onClick={() => setIsOpen3(!isOpen3)}>Back</button>
      {isOpen3 && (
        <div style={{ border: '1px solid black', margin: "10px 100px 10px 100px"}}>
          <p>上斜划船 12下 (1) 2 2 2 <input type="checkbox" /></p>
          <p>單邊划船 12下 2 2 2 <input type="checkbox" /></p>
        </div>
      )}
      <p></p>
      <button style={{ width: "150px", height: "40px" }} onClick={() => setIsOpen4(!isOpen4)}>Biceps</button>
      {isOpen4 && (
        <div style={{ border: '1px solid black', margin: "10px 100px 10px 100px"}}>
          <p>彎舉 12下 (0) 1 1 1 <input type="checkbox" /></p>
          <p>直舉 12下 1 1 1 <input type="checkbox" /></p>
        </div>
      )}
      <p></p>
      <button style={{ width: "150px", height: "40px" }} onClick={() => setIsOpen5(!isOpen5)}>Shoulders</button>
      {isOpen5 && (
        <div style={{ border: '1px solid black', margin: "10px 100px 10px 100px"}}>
          <p>Rear Delt Fly 12下 1.5 1.5 1.5 <input type="checkbox" /></p>
          <p>Lateral Raise 15下 0.5 0.5 0.5 <input type="checkbox" /></p>
          <p>Shoulder Press 8下 1.5 1.5 1.5 <input type="checkbox" /></p>
        </div>
      )}
    </div>
  )
}

export default ExercisesList