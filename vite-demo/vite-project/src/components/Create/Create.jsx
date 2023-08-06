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

        if(formValues.title.length < 2 || formValues.title.length > 20) {
            return alert('The title must be between 2 and 20 characters!')
        }
        
        if(formValues.description.length < 2 || formValues.description.length > 1000) {
            return alert('The description must be between 2 and 1000 characters!')
        }
        
        if(formValues.imgURL.length < 2 || formValues.imgURL.length > 1000) {
            return alert('The image URL must be between 2 and 1000 characters!')
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
            <form onSubmit={formSubmit} className="form">
            <label htmlFor="title"><i class="fas fa-heading"></i>
                <input 
                    type="text"
                    placeholder="Movie Title" 
                    name="title" 
                    id="title" 
                    value={formValues.title}
                    onChange={onChange}
                />
            </label>
            <label htmlFor="description"><i class="fas fa-envelope-open-text"></i>
                <textarea 
                    name="description"
                    placeholder="Movie Description" 
                    id="description" 
                    cols="30" 
                    rows="5"
                    value={formValues.description}
                    onChange={onChange}
                    ></textarea>
            </label>
            <label htmlFor="imgURL"><i class="fas fa-link"></i> 
                <input 
                    type="text"
                    placeholder="Movie Poster URL" 
                    name="imgURL" 
                    id="imgURL" 
                    value={formValues.imgURL}
                    onChange={onChange}
                />
            </label>

            {isLoading ? <LoadingSpinner /> : <button>Create</button>}

        </form>
        </div>
    )
}
