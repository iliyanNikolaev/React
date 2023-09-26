import { Link } from "react-router-dom";

export default function NotFound() {
    
    return (
        <>  
            <h2>Error 404</h2>
            <p>Please <Link to="/login">log in</Link> or <Link to="/register">register</Link>.</p>
        </>

    )
}
