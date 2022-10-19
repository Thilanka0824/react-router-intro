import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"


const Contact = () => {
    const navigate = useNavigate()

    const redirectUserFunction = () => {
        navigate("/")
    }

    return (
        <div className="contact-inputs">
            <NavBar />
            <h1 className="contact h1" >Contact</h1>
            <br />
            <Input />
            <br />
            <button onClick={() => {
                redirectUserFunction()
            }}>SUBMIT</button>
        </div>
    )
}

export default Contact