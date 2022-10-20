import { Link } from "react-router-dom"
import '../index.css';



const NavBar = () => {
    

    return (
        <div>
            <h1 className="nav">
                <Link className="nav" to="/">Home</Link>
                <Link className="nav" to="/about">About</Link>
                <Link className="nav" to="/contact">Contact</Link>

            </h1>
        </div>
    )
}

export default NavBar