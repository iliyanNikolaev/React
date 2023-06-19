import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/characters'>Characters</Link>
    </nav>
}

export default Navigation;