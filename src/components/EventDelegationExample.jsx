import React from "react";

function EventDelegationExample() {
  const handleClick = (event) => {
    console.log(`Clicked element: ${event.target.tagName}`);
    if (event.target.tagName === "BUTTON") {
      console.log(`Button clicked: ${event.target.textContent}`);
    }
  };

  return (
    <>
    <h1>EventBubblingExample</h1>
    <div onClick={handleClick}>
      <button>Button 1</button>
      <button>Button 2</button>
      <p>Paragraph</p>
    </div>
    </>
  );
}

export default EventDelegationExample;
