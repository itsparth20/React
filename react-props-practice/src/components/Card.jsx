import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props){
    var contact = props.dict;
    return (
      <div>
        <div className="card">
          <div className="top">
            <Details detail={contact.id}/>
            <h2 className="name">{contact.name}</h2>
            <Avatar img={contact.imgURL}/>
          </div>
          <div className="bottom">
            <Details detail={contact.phone}/>
            <Details detail={contact.email}/>
          </div>
        </div>
      </div>
      );
  }
  
export default Card;