import React, { useState } from "react";

import "./SignUp.css";
const SignUp = () => {
  //Creating User Object to store User deatil using useState Hook
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  //Save the input enter by the user in input field in userRegistration
  const handleUserDetail = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  //Submit the form on click submit button
  const handleSubmit = (e) => {
    //Preventing default behavior of form
    e.preventDefault();

    //setting all the input field empty on submition of the form
    setUserRegistration({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };
  return (
    <>
      <div className="main-container">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="signup-container">
            <div className="input-container">
              <input
                className="input-value"
                type="text"
                placeholder="User Name"
                value={userRegistration.username}
                onChange={handleUserDetail}
                id="username"
                autoComplete="off"
                name="username"
              />
            </div>
            <div className="input-container">
              <input
                className="input-value"
                type="email"
                placeholder="Email"
                value={userRegistration.email}
                onChange={handleUserDetail}
                id="email"
                name="email"
                autoComplete="off"
              />
            </div>
            <div className="input-container">
              <input
                className="input-value"
                type="password"
                placeholder="Password"
                value={userRegistration.password}
                onChange={handleUserDetail}
                id="password"
                autoComplete="off"
                name="password"
              />
            </div>
            <div className="input-container">
              <input
                className="input-value"
                type="password"
                placeholder="Confirm Password"
                value={userRegistration.confirmpassword}
                onChange={handleUserDetail}
                id="confirmpassword"
                autoComplete="off"
                name="confirmpassword"
              />
            </div>
          </div>

          <div className="submit-btn">
            <button className="btn" type="submit">
              SIGN UP
            </button>
          </div>

          <div className="account-container">
            <p>
              Already have an Account? <a>SignUp</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
