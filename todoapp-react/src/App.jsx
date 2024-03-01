import './App.css'
import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Input } from "./components/Input"
import { Tasks } from "./components/Tasks"

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
 
  const [tasks, setTasks] = useState([]);

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(saved);
    if(saved){
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle){
    setTasksAndSave([
      ...tasks,
      {
        // creates a uniqe id for every created task randomUUID
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasksAndSave(newTasks);
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
    setTasksAndSave(newTasks);
  }



  return (
      <>
        <Header/>
        <Input onAddTask={addTask}/>
        <Tasks
          tasks={tasks}
          onDelete={deleteTaskById}
          onComplete={toggleTaskCompletedById}
        />
      </>
  )
}

export default App
