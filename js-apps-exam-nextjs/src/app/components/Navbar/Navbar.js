import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <>
                <h1>
                    <Link href="/">Orphelp</Link>
                </h1>
                <nav>
                    <Link href="/">Dashboard</Link>
                    {/* Logged-in users */}
                    <div id="user">
                        <Link href="#">My Posts</Link>
                        <Link href="/create">Create Post</Link>
                        <Link href="#">Logout</Link>
                    </div>
                    {/* Guest users */}
                    <div id="guest">
                        <Link href="/login">Login</Link>
                        <Link href="/register">Register</Link>
                    </div>
                </nav>
            </>

        </>
    );
}