import React, { useState } from "react";
import Tasks from "./components/Tasks";
import './App.css';
import AddTask from "./components/AddTask";

const App = () =>{
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação ",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
    {
      id: "2",
      title: 'fazer compras',
      completed: true,
    },
    {
      id: "2",
      title: "ler livro de fisica para prova",
      completed: true,
    }
  ]); 
  return(
    <>
    <div className="container">
    <AddTask />
      <Tasks tasks={tasks} />
    </div>
    </>
  )
}

export default App;