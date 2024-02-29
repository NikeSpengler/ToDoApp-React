import "../styles/task.css"
import trash1 from "../assets/trash1.svg"

export function Task() {
    return (
        <div className="task">
            <button className="checkContainer">
                <div />
            </button>
            <p>Trashes</p>
            <button className="deleteButton">
                <img className="trashIcon" src={trash1}/>
            </button>
        </div>
    )
}