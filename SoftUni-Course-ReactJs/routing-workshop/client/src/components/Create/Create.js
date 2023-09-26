import React from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/authContext";
import { GameContext } from "../../contexts/gameContext";

export const Create = () => {

    const {onCreateHandler} = React.useContext(GameContext);
    
    const {formValues, onChange} = useForm({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });

    const { auth } = React.useContext(AuthContext);

    const onCreateSubmit = (e) => {
        e.preventDefault();

        onCreateHandler(formValues, auth.accessToken);
    }

    if(auth.accessToken === undefined) {
        return <Navigate to="/login" />
    }

    return <>
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onCreateSubmit}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        value={formValues.title}
                        onChange={onChange}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        value={formValues.category}
                        onChange={onChange}
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                    />
                    <label htmlFor="levels" >MaxLevel:</label>
                    <input
                        value={formValues.maxLevel}
                        onChange={onChange}
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        value={formValues.imageUrl}
                        onChange={onChange}
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={formValues.summary}
                        onChange={onChange}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Create Game"
                    />
                </div>
            </form>
        </section>
    </>
}