import { Link } from "react-router-dom"



const NavBar = (firstName, lastName, email) => {
    

    return (
        <div>
            <h1 className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

            </h1>
        </div>
    )
}

export default NavBar