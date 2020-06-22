import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: ""
  });

  function changeFullName(event) {
    const { name, value } = event.target;

    setFullName(previous => {
      if (name === "fName") {
        return {
          fName: value,
          lName: previous.lName
        };
      } else if (name === "lName") {
        return {
          fName: previous.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={changeFullName}
          name="fName"
          placeholder="First Name"
        />
        <input onChange={changeFullName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
