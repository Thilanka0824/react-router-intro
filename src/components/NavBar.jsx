import { Link } from "react-router-dom"



const NavBar = () => {
    

    return (
        <div>
            <h1 className="nav">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

            </h1>
        </div>
    )
}

export default NavBar