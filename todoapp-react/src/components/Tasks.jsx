import "../styles/tasks.css"

export function Tasks() {
    return(
        <section className="tasks">
          <header className="header-tasks">
            <div>
                <p>Created todos</p>
                <span>10</span>
            </div>
            <div>
                <p>Completed todos</p>
                <span>1 of 10</span>
            </div>
          </header>
        </section>
    )     
}