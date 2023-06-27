import { Link } from "react-router-dom"

export const Header = (props) => {
    return (
        <nav>
            <Link to='/'>PPL(A)</Link>
            <Link to='/requirements'>Изисквания</Link>
            <Link to='/structure'>Структура на курса</Link>
            <Link to='/exams'>Изпити и процедури</Link>
        </nav>
    );
}