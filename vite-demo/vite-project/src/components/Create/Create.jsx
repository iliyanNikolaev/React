import React from 'react'

export default function Create() {
    return (
        <>
            <h2>Add new movie</h2>
            <form>
            <label htmlFor="title">Movie title:
                <input type="text" name="title" id="title" />
            </label>
            <label htmlFor="description">Description:
                <textarea name="description" id="description" cols="30" rows="5"></textarea>
            </label>
            <label htmlFor="imgURL">Poster URL:
                <input type="text" name="imgURL" id="imgURL" />
            </label>

            <button>Create Movie</button>
        </form>
        </>
    )
}
