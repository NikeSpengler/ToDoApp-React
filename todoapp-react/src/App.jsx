import './App.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from "./components/Input"
import { Tasks } from "./components/Tasks"


function App() {
 
  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle){
    setTasks([
      ...tasks,
      {
        // creates a uniqe id for every created task randomUUID
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if(task.id == taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTasks(newTasks);
  }

  return (
      <>
        <Header/>
        <Input onAddTask={addTask}/>
        <Tasks
          tasks={tasks}
          onComplete={toggleTaskCompletedById}
        />
      </>
  )
}

export default App
