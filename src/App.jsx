import React from "react";
import { useState } from "react";

import "./index.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const App = () => {
  const [signupList, setSignupList] = useState('')

  const handleAddSignup = (firstName, lastName, email) => {
    const newSignup = {
      firstName,
      lastName,
      email,
      createdDate: new Date().toString().substring(4, 24),

    }

    const signupListCopy = [signupList, newSignup]
    setSignupList(signupListCopy)
  }

  return (
    <div>
      <NavBar />
      {/* passing items in array to rendered children */}
      <Outlet context={[signupList, handleAddSignup]} /> 
    </div>
  )
};

export default App ;
