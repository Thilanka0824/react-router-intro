import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"


const Contact = () => {
    

    return (
        <div >
            <NavBar />
            <h1 className="contact h1" >Contact</h1>
            <br />
            <Input />
            
        </div>
    )
}

export default Contact