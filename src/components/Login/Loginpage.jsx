import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loadingImg from "../../assets/img/loading.gif";
import "./Loginpage.css";
import { ENDPOINTS } from "../../utils/apiConfig";
import { Button } from "@mui/material";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [loginErr, setLoginErr] = useState("");
  const [mobileNotVerified, setMobileNotVerified] = useState(false);
  const [emailNotVerified, setEmailNotVerified] = useState(false);
  const Login_API = ENDPOINTS.LOGIN_USER;
  const resend_email_API = ENDPOINTS.RE_SEND_E_VERIFY;
  const clientId = localStorage.getItem("clientId");
  let navigate = useNavigate();
  const [fieldErrors, setFieldErrors] = useState({
    userMobile: "",
    password: "",
  });

  const loginUser = async () => {
    setLoader(true);
    setLoginErr("");
    setMobileNotVerified(false);
    setEmailNotVerified(false);
    setFieldErrors({});
    try {
      const response = await fetch(Login_API, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: document.getElementById("mobile").value,
          password: document.getElementById("password").value,
        }),
      });

      const resData = await response.json();
      setLoader(false);

      if (resData.responsed) {
        if (
          resData.responsed.user_status === "Y" &&
          resData.responsed.mobile_verify === "Y" &&
          resData.responsed.email_verify === "Y"
        ) {
          console.log(resData.responsed.sessionid);
          sessionStorage.setItem("sessionid", resData.responsed.sessionid);
          sessionStorage.setItem("kyc_status", resData.responsed.kyc_status);
          navigate(`/dashboard`);
        } else if (resData.responsed.mobile_verify !== "Y") {
          setMobileNotVerified(true);
        } else if (resData.responsed.email_verify !== "Y") {
          setEmailNotVerified(true);
        }
      } else if (resData.success === false) {
        console.log(resData.message);
        parseFieldErrors(resData.message);
      } else {
        console.error("Unexpected response structure:", resData);
        setLoginErr("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setLoader(false);
      console.error("Error during OTP verification:", error);
      setLoginErr("Internal Server Error. Please try again later.");
    }
  };

  const parseFieldErrors = (errorMessage) => {
    const fieldErrors = {
      userMobile: "",
      password: "",
    };

    if (errorMessage.includes('"mobile"'))
      fieldErrors.userMobile = "Mobile is not allowed to be empty.";
    if (errorMessage.includes('"password"'))
      fieldErrors.password = "Password is not allowed to be empty";
    setFieldErrors(fieldErrors);
  };

  const resendEmail = async () => {
    setLoader(true);
    setLoginErr("");
    setEmailNotVerified(false);
    try {
      const response = await fetch(resend_email_API, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: clientId,
        }),
      });

      const resData = await response.json();
      setLoader(false);

      if (resData.mess) {
        alert(resData.mess.message);
      } else {
        console.error("Unexpected response structure:", resData);
        setLoginErr("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setLoader(false);
      console.error("Error during OTP verification:", error);
      setLoginErr("Internal Server Error. Please try again later.");
    }
  };
// Allow enter key part
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        loginUser();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <section className="mt-5 py-5 enquiry-section1" id="stack">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
              <div className="form">
                <h3 className="text-center">LOGIN FORM</h3>
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
                  <label>Mobile</label>
                  <input type="mobile" name="mobile" id="mobile"/>
                  <p className="msg text-warning">{fieldErrors.userMobile}</p>
                </div>
                <div className="inputbox">
                  <label>Password</label>
                  <input type="Password" name="password" id="password"/>
                  <p className="msg text-warning">{fieldErrors.password}</p>
                </div>
                <span className="text-warning">{loginErr}</span>
                <div
                  className={`text-warning ${
                    mobileNotVerified ? "d-block" : "d-none"
                  }`}
                  id="mobile-not-verify-err"
                >
                  Your mobile is not verified, please{" "}
                  <Link to="mobileotp">Click Here</Link> to verify.
                </div>
                <div
                  className={`text-warning ${
                    emailNotVerified ? "d-block" : "d-none"
                  }`}
                  id="email-not-verify-err"
                >
                  Your email is not verified, please{" "}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={resendEmail}
                  >
                    click here
                  </Button>{" "}
                  to verify.
                </div>
                <div className="inputbox text-right">
                  <a href="/Forgotun">Forgot Password?</a>
                </div>
                <div>
                  <button type="submit" className="submitButton" onClick={loginUser}>
                    Submit
                  </button>
                </div>
                <div className="inputbox text-center">
                  <p>
                    You Don't have An Account ? <a href="/Register">Register</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="loaderContainer">
            <div className="inputbox text-center loader-box">
              {loader && (
                <img src={loadingImg} alt="loading..." className="loaderImg" />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;