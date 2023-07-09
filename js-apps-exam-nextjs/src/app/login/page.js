export default function Login() {
    return (
        <form id="login">
            <h1 className="title">Login</h1>
            <article className="input-group">
                <label htmlFor="login-email">Email: </label>
                <input type="email" id="login-email" name="email" />
            </article>
            <article className="input-group">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" />
            </article>
            <input type="submit" className="btn submit-btn" defaultValue="Log In" />
        </form>

    );
}