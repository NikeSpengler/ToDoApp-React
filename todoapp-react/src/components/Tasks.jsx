import "../styles/tasks.css"
import { Task } from "./Task"

export function Tasks({ tasks, onComplete, onDelete }) {
    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return(
        <section className="tasks">
          <header className="header-tasks">
            <div>
                <p>Created todos:</p>
                <span>{taskQuantity}</span>
            </div>
            <div>
                <p>Completed:</p>
                <span>{completedTasks} of {taskQuantity}</span>
            </div>
          </header>
          <div className="list">
            {tasks.map( task => (
                < Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
            ))}
          </div>
        </section>
    )     
}