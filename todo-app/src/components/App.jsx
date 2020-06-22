import React from "react";

function App() {
  const [todo, setTodo] = React.useState({
    todo: "",
    todos: []
  });

  function setTodoValue(event) {
    const value = event.target.value;
    setTodo(previous => {
      return {
        ...previous,
        todo: value
      };
    });
  }

  function listItems(item) {
    return <li>{item}</li>;
  }

  function addToTodoList() {
    setTodo(previous => {
      return {
        todo: "",
        todos: [...previous.todos, previous.todo]
      };
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={setTodoValue} type="text" value={todo.todo} />
        <button onClick={addToTodoList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{todo.todos.map(listItems)}</ul>
      </div>
    </div>
  );
}

export default App;
