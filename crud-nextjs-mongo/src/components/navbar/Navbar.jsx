import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar-container">
        <Link className="nav-link" href={'/'}>NextJS-Mongo-CRUD</Link>
        <Link className="nav-link button" href={'/addTopic'}>Add topic</Link>
    </div>
  )
}
