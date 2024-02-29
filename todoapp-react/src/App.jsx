import './App.css'
import { Header } from './components/Header'
import { Input } from "./components/Input"
import { Tasks } from "./components/Tasks"
import { Task } from "./styles/task.css"

function App() {
 

  return (
      <>
        <Header/>
        <Input/>
        <Tasks/>
        <Task/>
      </>
  )
}

export default App
