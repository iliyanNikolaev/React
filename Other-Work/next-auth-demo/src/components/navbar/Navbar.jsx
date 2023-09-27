"use client"
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Navbar() {

    return (
        <>
            <Link href='/'>Home</Link>
            <button onClick={() => signOut()}>Logout</button>
            <Link href='/login'>Login</Link>
            <Link href='/register'>Register</Link>
        </>
    )
}
