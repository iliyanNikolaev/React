export default function Register() {
    return (
        <form id="register">
            <h1 className="title">Register</h1>
            <article className="input-group">
                <label htmlFor="register-email">Email: </label>
                <input type="email" id="register-email" name="email" />
            </article>
            <article className="input-group">
                <label htmlFor="register-password">Password: </label>
                <input type="password" id="register-password" name="password" />
            </article>
            <article className="input-group">
                <label htmlFor="repeat-password">Repeat Password: </label>
                <input type="password" id="repeat-password" name="repeatPassword" />
            </article>
            <input type="submit" className="btn submit-btn" defaultValue="Register" />
        </form>

    );
}