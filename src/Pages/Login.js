import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logger = (props) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const redirectLoggedInUserFunction = () => {
        navigate("/home")
    }
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className="contact-inputs-login" >
            <h1>Login Area</h1>
            <input placeholder="username"
                type="text"
                value={props.userName}
                onChange={(event) => {
                    setUserName(event.target.value)
                    console.log(userName)

                }}></input>
            <br />
            <input placeholder="password"
                type="text"
                value={props.password}
                onChange={(event) => {
                    setPassword(event.target.value)
                    console.log(password)
                }}></input>
            <br />
            <button onClick={() => {
                userName === "LakerLegend" &&
                password === "kobebryant" ?
                redirectLoggedInUserFunction() :
                alert("Please log in")

                 // This is dumb because the result is always logging the user in 
                setIsLoggedIn(!isLoggedIn)

            }}>Log In</button>
        </div>
    )
}

export default Logger