import React from "react";

function App() {
  let time = new Date().toLocaleTimeString("it-IT");
  const [currentTime, setTime] = React.useState(time);

  function timer() {
    let time = new Date().toLocaleTimeString("it-IT");
    setTime(time);
  }
  setInterval(timer, 1000);
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={timer}>Get Time</button>
    </div>
  );
}

export default App;
