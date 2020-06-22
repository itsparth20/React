import React from "react";

function Item(props) {
  function completed() {
    props.deleteItem(props.id);
  }

  return <li onClick={completed}>{props.todoItem}</li>;
}

export default Item;
