import "../styles/tasks.css"
import { Task } from "./Task"

export function Tasks() {
    return(
        <section className="tasks">
          <header className="header-tasks">
            <div>
                <p>Created todos</p>
                <span>10</span>
            </div>
            <div>
                <p>Completed</p>
                <span>1 of 10</span>
            </div>
          </header>
          <div className="list">
            <Task/>
          </div>
        </section>
    )     
}