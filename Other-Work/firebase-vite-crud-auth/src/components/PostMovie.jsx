import { useDataContext } from '../contexts/DataContext';

export const PostMovie = () => {

    const { postMovieHandler } = useDataContext();

    return (
        <>
            <h2>Create movie</h2>
            <form onSubmit={postMovieHandler}>
                <input type="text" placeholder='Title...' />
                <input type="number" placeholder='Year...' />
                <input type="text" placeholder='Resume...' />
                <input type="submit" defaultValue="add" />
            </form>
        </>
    )
}
