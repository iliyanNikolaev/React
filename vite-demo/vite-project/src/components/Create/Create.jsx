import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/authContext"
import { MovieContext } from "../../contexts/movieContext"
import { useForm } from "../../hooks/useForm"
import { Navigate } from "react-router-dom"

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

export default function Create() {
    const [isLoading, setIsLoading] = useState(false);

    const { createMovieHandler } = useContext(MovieContext);
    const { auth } = useContext(AuthContext);

    const { formValues, onChange } = useForm({ title: '', description: '', imgURL: '' });

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);

            await createMovieHandler(formValues, auth.objectId);
            
            setIsLoading(false);
        } catch (err) {
            console.log(err.message)
        }
    }

    if(!auth.username) {
        return <Navigate to='/404' />
    }

    return (
        <>
            <h2>Add new movie</h2>
            <form onSubmit={formSubmit}>
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

            {isLoading ? <LoadingSpinner /> : <button>Create Movie</button>}

        </form>
        </>
    )
}
