import "../styles/input.css"
import { useState } from "react";

// Through the prop onAddTask you can add new tasks/todos in the inputfield
export function Input( {onAddTask} ) {

    const[title, setTitle] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onAddTask(title)
        setTitle("");
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return(
        <div className="input">
          <form onSubmit={handleSubmit} className="newTaskForm">
              <input placeholder="Add a new todo..." type="text" value={title} onChange={onChangeTitle}/>
              <button>Create</button>
          </form>
        </div>
    )     
}