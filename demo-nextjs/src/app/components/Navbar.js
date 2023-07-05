import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <Link href="/about">About</Link>
            <Link href="/about/us">About Us</Link>
            <Link href="/about/someone">About Someone</Link>
        </>
    );

}