import "../styles/task.css"
import trash1 from "../assets/trash1.svg"
import { BsFillCheckCircleFill } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
export function Task({ task, onComplete, onDelete }) {
    return (
        <div className="task">
            <button className="checkContainer" onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill/> : <div />}
            </button>

            <p>{task.title}</p>

            <button className="deleteButton" onClick={() => onDelete(task.id)}>
                <img className="trashIcon" src={trash1}/>
            </button>
        </div>
    )
}