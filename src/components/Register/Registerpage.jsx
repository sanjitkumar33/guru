import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registerpage.css";
import lodingImg from "../../assets/img/loading.gif";
import { ENDPOINTS } from "../../utils/apiConfig.js";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [registerErr, setregisterErr] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
    password: "",
    confirmPass: "",
    companyName: "",
  });
  let navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setregisterErr("");
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setLoader(true);
    setregisterErr("");
    setFieldErrors({});

    if (!isChecked) {
      setLoader(false);
      setregisterErr('You must agree to the terms and conditions.');
      return;
    }

    try {
      const response = await fetch(ENDPOINTS.REGISTER_USER, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: document.getElementById("userName").value,
          mobile: document.getElementById("userPhone").value,
          email: document.getElementById("userEmail").value,
          password: document.getElementById("password").value,
          confirmedpassword: document.getElementById("confirmPass").value,
          com_name: document.getElementById("companyName").value,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);
      setLoader(false);

      if (responseData.StatusCodes && responseData.StatusCodes === "00") {
        localStorage.setItem('clientId', responseData.responsed.clientId);
        console.log(
          "Registration successful:",
          responseData.responsed.clientId
        );
        navigate(`/mobileotp`);
      } else if (responseData.success === false) {
        console.log("Registration error:", responseData.message);
        parseFieldErrors(responseData.message);
      } else {
        console.error("Unexpected response structure:", responseData);
        setregisterErr("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setLoader(false);
      console.error("Error during OTP verification:", error);
      setregisterErr("Internal Server Error. Please try again later.");
    }
  };

  const parseFieldErrors = (errorMessage) => {
    const fieldErrors = {
      userName: "",
      userPhone: "",
      userEmail: "",
      password: "",
      confirmPass: "",
      companyName: "",
    };
    if (errorMessage.includes('"name"'))
      fieldErrors.userName = "*Name is not allowed to be empty";
    if (errorMessage.includes('"mobile"'))
      fieldErrors.userPhone = "*Mobile number already exist.";
    if (errorMessage.includes('"email"'))
      fieldErrors.userEmail = "*Invalid email address.";
    if (errorMessage.includes('"password"'))
      fieldErrors.password =
        "*password length must be at least 8 characters long, must contain one uppercase letter, one lowercase letter, and one digit";
    if (errorMessage.includes('"confirmedpassword"'))
      fieldErrors.confirmPass = "*Passwords do not match.";
    if (errorMessage.includes('"com_name"'))
      fieldErrors.companyName = "*Company name is not allowed to be empty";

    setFieldErrors(fieldErrors);
  };

  document.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
      document.getElementById('register-button').click();
    }
  });

  return (
    <div>
      <section className="mt-5 py-5 enquiry-section1" id="stack1">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-3 col-md-2 col-12 "></div>
            <div className="col-lg-6 col-md-8 col-12">
              <div className="form">
                <h3 className="text-center">REGISTRATION FORM</h3>
                <p className="text-center">
                  <Link to="/" className="text-white">
                    <img
                      src="https://i.ibb.co/vzTTh9B/home.png"
                      alt="home-icon"
                      className="home-icon"
                    />
                    Home
                  </Link>
                </p>
                <div className="inputbox">
                  <label>Name</label>
                  <input type="text" name="userName" id="userName" />
                  <p className="msg text-warning">{fieldErrors.userName}</p>
                </div>
                <div className="inputbox">
                  <label>Company Name</label>
                  <input type="text" name="companyName" id="companyName" />
                  <p className="msg text-warning">{fieldErrors.companyName}</p>
                </div>
                <div className="inputbox">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="userEmail" id="userEmail" />
                  <p className="msg text-warning">{fieldErrors.userEmail}</p>
                </div>
                <div className="inputbox">
                  <label>Mobile</label>
                  <input type="phone" name="userPhone" id="userPhone" />
                  <p className="msg text-warning">{fieldErrors.userPhone}</p>
                </div>
                <div className="inputbox">
                  <label>password</label>
                  <input type="password" name="password" id="password" />
                  <p className="msg text-warning">{fieldErrors.password}</p>
                </div>
                <div className="inputbox">
                  <label>confirm password</label>
                  <input type="password" name="confirmPass" id="confirmPass" />
                  <p className="msg text-warning">{fieldErrors.confirmPass}</p>
                </div>
                <span id="mobileOtpError" className="text-danger">{ registerErr }</span>
                <div className="tacbox">
                  <input id="checkbox" type="checkbox" className="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                  <label htmlFor="checkbox">
                    I agree to these <Link to="/termsandcondition">Terms and Conditions</Link>.
                  </label>
                </div>
                <div>
                  <button type="submit" id="register-button" className="submitButton" onClick={registerUser}>
                    Submit
                  </button>
                </div>
                <div className="inputbox text-center">
                  <p>
                    Already Have An Account ? <a href="/Login"> Login</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-2 col-12 "></div>
          </div>
          <div className="loaderContainer">
            <div className="inputbox text-center loader-box">
              {loader && (
                <img src={lodingImg} alt="loading..." className="loaderImg" />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
