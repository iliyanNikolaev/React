import { Link, NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return <nav>
        <NavLink className={({isActive}) => isActive ? 'is-active' : null} to='/'>Home</NavLink>
        {/* За пример как работи 'NavLink', за повече инфо може да се погледне документацията на react-router-dom
            на кратко, когато е цъкнат конкретният линк, ще добави клас 'is-active', който в този случай в css-a
            e настроен да прави цвета на буквите кафяви.
        */}
        <Link to='/about'>About</Link>
        <Link to='/characters'>Characters</Link>
    </nav>
}

export default Navigation;