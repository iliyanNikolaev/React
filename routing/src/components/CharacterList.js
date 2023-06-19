import React from "react";
import CharacterListItem from "./CharacterListItem";

const baseUrl = 'https://swapi.dev/api/people'

const CharacterList = (props) => {

    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results);
            });  
    }, []);

    
    return <>
        <h2>Star Wars Characters</h2>
        <ul>
            {characters.map(x => <CharacterListItem key={x.url} name={x.name} url={x.url}/>)}
        </ul>
    </>
}

export default CharacterList;