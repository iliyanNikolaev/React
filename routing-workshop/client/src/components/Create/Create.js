import React from "react";

export const Create = ({
    onCreateHandler
}) => {

    const [values, setValues] = React.useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });

    const onCreateSubmit = (e) => {
        e.preventDefault();

        onCreateHandler(values);
    }

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setValues(state => ({ ...state, [name]: value }));
    }

    return <>
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onCreateSubmit}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        value={values.title}
                        onChange={onChangeHandler}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        value={values.category}
                        onChange={onChangeHandler}
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                    />
                    <label htmlFor="levels" >MaxLevel:</label>
                    <input
                        value={values.maxLevel}
                        onChange={onChangeHandler}
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        value={values.imageUrl}
                        onChange={onChangeHandler}
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={values.summary}
                        onChange={onChangeHandler}
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