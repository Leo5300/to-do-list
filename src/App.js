import React, { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";


export default function App() {
  const [visivel, setVisivel] = useState(true);
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [dataDia, setDatadia] = useState("");
  const [hora, setHora] = useState("");


  const addTask = () => {
    if (newTask.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: newTask,
      date: dataDia,
      hora: hora,
    };

    setTodos([...todos, newTodo]);
    setNewTask("");
    setDatadia("");
    setHora("");
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const showList = () => {
    setVisivel(!visivel);
  };

  return (
    <div className="app-container">
      <h1>Minha ToDo List</h1>

  
      <div className="input-group">
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Adicionar</button>
        <button onClick={showList}>{visivel ? "Ocultar" : "Lista"}</button>
      </div>

      <div className="datetime-group">
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
        <input
          type="date"
          value={dataDia}
          onChange={(e) => setDatadia(e.target.value)}
        />
      </div>

 
      <div className="todo-list-container">
        {visivel && <TodoList todos={todos} removeTask={removeTask} />}
      </div>
    </div>
  );
}
