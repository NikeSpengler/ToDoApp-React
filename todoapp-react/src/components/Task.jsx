import "../styles/task.css"
import trash1 from "../assets/trash1.svg"

// eslint-disable-next-line react/prop-types
export function Task({ task }) {
    return (
        <div className="task">
            <button className="checkContainer">
                <div />
            </button>

            <p>{task.title}</p>

            <button className="deleteButton">
                <img className="trashIcon" src={trash1}/>
            </button>
        </div>
    )
}