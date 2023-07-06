import Image from 'next/image'
import Link from "next/link";
import './Navbar.css';

export default function Navbar() {

    return (
        <div className="headerDiv">
            <Image src="/logo3.png" className="logo" alt="logo" width={100} height={58}/>
                <nav className="navbar">
                    <ul className="links">
                        <li className="link"><Link href="/">Home</Link></li>
                        <li className="link"><Link href="/courses">Courses</Link></li>
                        <li className="link"><Link href="/about">About</Link></li>
                    </ul>
                </nav>
        </div>
    );
}