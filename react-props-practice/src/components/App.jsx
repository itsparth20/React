import React from "react";
import contacts from "../contacts";
import Card from "./Card"


function createCart(contact){
  return <Card key={contact.id} dict={contact}/>;
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCart)}
    </div>
  );
}

export default App;
