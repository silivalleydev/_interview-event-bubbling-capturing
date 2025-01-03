import React from "react";

function EventCapturingExample() {
  const handleParentCapture = () => {
    console.log("Parent capturing");
  };

  const handleChildCapture = () => {
    console.log("Child capturing");
  };

  const handleParentBubble = () => {
    console.log("Parent bubbling");
  };

  const handleChildBubble = () => {
    console.log("Child bubbling");
  };

  return (
    <>
    <hr></hr>
    <h1>EventCapturingExample</h1>
    <div onClickCapture={handleParentCapture} onClick={handleParentBubble}>
      <button
        onClickCapture={handleChildCapture}
        onClick={handleChildBubble}
      >
        Click Me
      </button>
    </div>
    </>
  );
}

export default EventCapturingExample;
