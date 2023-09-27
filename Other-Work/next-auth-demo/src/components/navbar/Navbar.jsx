import Link from "next/link";

export default function Navbar() {

    return (
        <>
            <Link href='/'>Home</Link>
            {false //todo.....
                ? <>
                    <Link href='/logout'>Logout</Link>
                </>
                : <>
                    <Link href='/login'>Login</Link>
                    <Link href='/register'>Register</Link>
                </>}
        </>
    )
}
