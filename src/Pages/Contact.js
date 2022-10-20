
//import Input from "../components/Input"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom"



const ContactPage = (props) => {
    //passed in as props to the <OutLet /> component so they can be used here
    const [signupList, handleAddSignup] = useOutletContext()

    const navigate = useNavigate();
    const redirectUserFunction = () => {
        navigate("/");
    };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="contact-inputs">
            <h3 className="contact h1" >Please Enter Contact Info</h3>
            <br />
            <input
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={(event) => {
                    setFirstName(event.target.value);
                    console.log(firstName);
                }}
            ></input>
            <br />
            <input
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={(event) => {
                    setLastName(event.target.value);
                    console.log(lastName);
                }}
            ></input>
            <br />
            <input
                placeholder="myemail@gmail.com"
                type="text"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                    console.log(email);
                }}
            ></input>
            <br />
            <button
                // Validation
                onClick={() => {
                    firstName.length > 0 &&
                        lastName.length > 0 &&
                        email.length > 0 &&
                        email.includes("@")
                        ? redirectUserFunction()
                        : alert("Please fill in all input fields");
                    handleAddSignup(firstName, lastName, email)
                }}
            >SUBMIT</button>
        </div>
    );





}

export default ContactPage