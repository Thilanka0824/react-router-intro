import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = (props) => {
    const navigate = useNavigate();
    const redirectUserFunction = () => {
        navigate("/home");
    };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");


    /*
    const addContact = (firstName, lastName, email) => {
        const newPerson = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            createdDate: new Date().toString().substring(4, 24),
        };
    };
    */
    return (
        <div className="contact-inputs">
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
                placeholder="Email@gmail.com"
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
                }}
            >
                SUBMIT
            </button>
        </div>
    );
};

export default Input;
