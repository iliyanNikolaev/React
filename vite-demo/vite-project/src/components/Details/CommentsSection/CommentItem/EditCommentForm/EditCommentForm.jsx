
export default function EditCommentForm({
    currComment, onChange, onEditHandler
}) {
    return (
        <>
            <input
                type="text"
                name="content"
                value={currComment.content}
                onChange={onChange}
            />
            <input
                type="submit"
                value="Save Changes"
                onClick={onEditHandler}
            />
        </>
    )
}
