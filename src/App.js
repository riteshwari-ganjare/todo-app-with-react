import React, { useState } from "react";
import './App.css'
function App() {
  const [input, setInput] = useState("");
   const [list, setList] = useState([]);
 const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    

    setList([...list, newTodo]);

    
    setInput("");
  };

  const deleteTodo = (id) => {
    
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button  onClick={() => addTodo(input)}>Add</button>
      <div className="sub">
      <ol>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ol>
      </div>
    </div>
  );
}

export default App;