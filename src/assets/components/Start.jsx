import React, { useRef, useState } from "react";

export default function Start({ setUsername }) {
  const [inputValue, setInputValue] = useState();

  const setInput = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  //   const inputRef = useRef();
  const handleClick = () => {
    inputValue && setUsername(inputValue);
    // inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <>
      <div className="start-main">
        <div className="welcome">WelCome to KBC</div>
        <div className="start">
          <input
            type="text"
            placeholder="Enter your name"
            className="startInput"
            // ref={inputRef}
            required
            onChange={setInput}
          />
          <button className="startButton" onClick={handleClick}>
            Start
          </button>
        </div>
      </div>
    </>
  );
}
