import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const baseUrl = 'https://swapi.dev/api/people'

const Character = () => {
    
    const [character, setCharacter] = React.useState({});
    const { characterId } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch(`${baseUrl}/${characterId}`)
            .then(res => res.json())
            .then(data => setCharacter(data));
    }, [characterId]);

    const onBackButtonClick = () => {
        navigate('/characters');
    }

    return <>
        <h2>Character page</h2>
        <p><b>Name: </b> {character.name}</p>
        <button onClick={onBackButtonClick}>Back</button>
        </>
    
}

export default Character;