import React from 'react'

export default function AddCommentForm({
    formSubmit, formValues, onChange
}) {
    return (
        <form onSubmit={formSubmit}>
            <label htmlFor='content'>Add a comment:
                <input
                    type="text"
                    name='content'
                    id='content'
                    value={formValues.content}
                    onChange={onChange}
                />
                <input type="submit" value="Add" />
            </label>
        </form>
    )
}
