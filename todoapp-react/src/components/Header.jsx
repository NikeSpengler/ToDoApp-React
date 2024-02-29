import "../styles/header.css";
import pen from "../assets/pen.svg"

export function Header() {
    return(
        <header className="header">
            <p>
                TODOS
            </p>
            <img className="penicon" src={pen}/>
        </header>
    )     
}