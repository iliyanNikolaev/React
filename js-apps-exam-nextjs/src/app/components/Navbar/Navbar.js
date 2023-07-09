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
                        <Link href="#">Create Post</Link>
                        <Link href="#">Logout</Link>
                    </div>
                    {/* Guest users */}
                    <div id="guest">
                        <Link href="#">Login</Link>
                        <Link href="#">Register</Link>
                    </div>
                </nav>
            </>

        </>
    );
}