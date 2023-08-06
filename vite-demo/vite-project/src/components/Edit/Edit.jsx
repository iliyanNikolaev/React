import './Edit.css'
import { useContext, useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { MovieContext } from "../../contexts/movieContext";
import { AuthContext } from "../../contexts/authContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function Edit() {
    const [isLoading, setIsLoading] = useState(true);

    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        imgURL: ''
    });

    const onChange = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const { movieId } = useParams();

    const { auth } = useContext(AuthContext);

    if (!auth.username) {
        return <Navigate to='/404' />
    }

    const { editMovieHandler, getMovieById } = useContext(MovieContext);

    useEffect(() => {
        getMovieById(movieId)
            .then(data => {
                setFormValues({
                    title: data.title,
                    description: data.description,
                    imgURL: data.imgURL
                });

                setIsLoading(false);
            });
    }, [movieId]);

    const formSubmit = async (e) => {
        e.preventDefault();

        if (formValues.title == '', formValues.description == '', formValues.imgURL == '') {
            return alert('Please fill all fields');
        }

        const data = {
            title: formValues.title.trim(),
            description: formValues.description.trim(),
            imgURL: formValues.imgURL.trim()
        }

        try {

            await editMovieHandler(movieId, data, auth.objectId);

        } catch (err) {
            console.log(err.message);
        }

    }

    return (
        <div className='edit-movie-page'>
            <h2>Edit movie</h2>

            {isLoading
                ? <LoadingSpinner />
                : <form onSubmit={formSubmit}>
                    <label htmlFor="title">Movie title:
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={formValues.title}
                            onChange={onChange}
                        />
                    </label>
                    <label htmlFor="description">Description:
                        <textarea
                            name="description"
                            id="description"
                            cols="30"
                            rows="5"
                            value={formValues.description}
                            onChange={onChange}
                        ></textarea>
                    </label>
                    <label htmlFor="imgURL">Poster URL:
                        <input
                            type="text"
                            name="imgURL"
                            id="imgURL"
                            value={formValues.imgURL}
                            onChange={onChange}
                        />
                    </label>

                    <button>Edit Movie</button>
                </form>}

        </div>
    )
}
