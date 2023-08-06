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

    if(!auth.username) {
        return <Navigate to='/404' />
    }
    
    const { formValues, onChange } = useForm({ title: '', description: '', imgURL: '' });

    const formSubmit = async (e) => {
        e.preventDefault();

        if(formValues.title == '' || formValues.description == '' || imgURL == ''){
            return alert('Please fill all fields!');
        }

        const data = {
            title: formValues.title.trim(),
            description: formValues.description.trim(),
            imgURL: formValues.imgURL.trim()
        }

        try {
            setIsLoading(true);

            await createMovieHandler(data, auth.objectId);
            
            setIsLoading(false);
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="create-page">
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
        </div>
    )
}
