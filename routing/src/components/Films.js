import React from "react";

const baseUrl = 'https://swapi.dev/api/films';


const Films = (
    
) => {
    const [films, setFilms] = React.useState([]);

    React.useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => setFilms(data.results));
    }, [])
    return <>
        <h4>Films</h4>
        <ul>
            {films.map(x => <li>{x.title}</li>)}
        </ul>
    </>
}

export default Films;