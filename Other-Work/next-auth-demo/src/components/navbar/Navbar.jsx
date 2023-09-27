"use client"
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";

export default function Navbar() {
    const { auth } = useAuthContext();

    return (
        <>
            {auth.username
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
