import { Link } from "react-router-dom"

export const Header = (props) => {
    return (
        <nav>
            <Link to='/'></Link>
            <Link to='/requirements'></Link>
            <Link to='/courseStructure'></Link>
            <Link to='/exams'></Link>
            <Link to='/about'></Link>
            <Link to='/contacts'></Link>
        </nav>
    );
}