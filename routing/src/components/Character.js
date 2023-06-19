import React from "react";
import { useParams } from "react-router-dom";

const baseUrl = 'https://swapi.dev/api/people'

const Character = () => {
    
    const [character, setCharacter] = React.useState({});
    const { characterId } = useParams();

    React.useEffect(() => {
        fetch(`${baseUrl}/${characterId}`)
            .then(res => res.json())
            .then(data => setCharacter(data));
    }, [characterId]);


    return <>
        <h2>Character page</h2>
        <p><b>Name: </b> {character.name}</p>
        </>
    
}

export default Character;