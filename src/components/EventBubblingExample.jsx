import React from "react";

function EventBubblingExample() {
  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log("Child clicked");
    // event.stopPropagation(); // 주석 해제하면 버블링 중단
  };

  return (
    <>
        <hr></hr>
        <h1>EventBubblingExample</h1>
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>Click Me</button>
    </div>
    </>
  );
}

export default EventBubblingExample;
