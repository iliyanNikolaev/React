import { useState } from 'react'
import { useDataContext } from '../contexts/DataContext';

export const EditMovie = ({
    id
}) => {
    const { getMovieById, updateMovieHandler } = useDataContext();
    const [isClicked, setIsClicked] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(null);

    const showEditForm = async () => {
        try {
            const movie = await getMovieById(id);
            setCurrentMovie(movie);
            setIsClicked(true);   
        } catch (err) {
            console.log(err);
            // if error happen getMovieById function will show alert
        }
    }

    const hideEditForm = () => {
        setIsClicked(false);
    }

    const editFormSubmit = async (e) => {
        e.preventDefault();

        const title = e.target[0].value;
        const year = Number(e.target[1].value);
        const resume = e.target[2].value;

        // DATA MUST BE VALIDATED

        try {
            await updateMovieHandler(id, { title, year, resume});
            hideEditForm();
            e.target.reset();
        } catch (err) {
            console.log(err);    
        }
    }

    return (
        <>
            {!isClicked
                ? <button onClick={showEditForm}>Edit</button>
                : <>
                    <form onSubmit={editFormSubmit}>
                        <input type="text" placeholder='Title...' defaultValue={currentMovie.title} />
                        <input type="number" placeholder='Year...' defaultValue={currentMovie.year} />
                        <input type="text" placeholder='Resume...' defaultValue={currentMovie.resume} />
                        <input type="submit" value="Save" />
                    </form>
                    <button onClick={hideEditForm}>Cancel</button>
                </>
            }
        </>
    )
}
