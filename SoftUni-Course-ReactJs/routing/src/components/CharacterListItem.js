import { Link } from "react-router-dom";

const CharacterListItem = ({
    name,
    url
}) => {

    const urlArr = url.split('/');
    const id = urlArr[urlArr.length - 2];

    return <li>
        <Link to={`/characters/${id}`}>{name}</Link>
    </li>
}

export default CharacterListItem;