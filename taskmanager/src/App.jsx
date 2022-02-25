import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from './components/TaskDetails'
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axio from 'axios'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: true,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: false,
    },
  ]);

  useEffect(() => {

  }, [tasks])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task;
    })
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId)

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          exact
          path="/"
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>

    </Router>
  )
}

export default App;
