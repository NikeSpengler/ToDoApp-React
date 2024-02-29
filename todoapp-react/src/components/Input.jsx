import "../styles/input.css"

export function Input() {
    return(
        <div className="input">
          <form className="newTaskForm">
              <input placeholder="Add a new todo..." type="text"/>
              <button>Create</button>
          </form>
        </div>
    )     
}