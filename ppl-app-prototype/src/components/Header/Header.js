import { Link } from "react-router-dom"

export const Header = (props) => {
    return (
        <nav>
            <Link to='/'>PPL(A)</Link>
            <Link to='/requirements'>Изисквания</Link>
            <Link to='/courseStructure'>Структура на курса</Link>
            <Link to='/exams'>Изпити и процедури</Link>
            <Link to='/about'>За организацията</Link>
            <Link to='/contacts'>Контакти</Link>
        </nav>
    );
}