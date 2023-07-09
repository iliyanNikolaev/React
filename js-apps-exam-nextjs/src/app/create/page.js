export default function Create() {
    return (
        <form id="create">
            <h1 className="title">Create Post</h1>
            <article className="input-group">
                <label htmlFor="title">Post Title</label>
                <input type="title" name="title" id="title" />
            </article>
            <article className="input-group">
                <label htmlFor="description">Description of the needs </label>
                <input type="text" name="description" id="description" />
            </article>
            <article className="input-group">
                <label htmlFor="imageUrl"> Needed materials image </label>
                <input type="text" name="imageUrl" id="imageUrl" />
            </article>
            <article className="input-group">
                <label htmlFor="address">Address of the orphanage</label>
                <input type="text" name="address" id="address" />
            </article>
            <article className="input-group">
                <label htmlFor="phone">Phone number of orphanage employee</label>
                <input type="text" name="phone" id="phone" />
            </article>
            <input type="submit" className="btn submit" defaultValue="Create Post" />
        </form>

    );
}