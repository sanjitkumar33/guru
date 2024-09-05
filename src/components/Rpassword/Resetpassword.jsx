import "./Resetpassword.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ENDPOINTS } from "../../utils/apiConfig.js";
import lodingImg from "../../assets/img/loading.gif";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInputStrength} from '../PasswordInputComponent';
const Resetpassword = () => {
  const [loader, setLoader] = useState(false);
  const [resetPassErr, setResetPassErr] = useState("");
  const [loginBtn, setLoginBtn] = useState(false);

  let navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const [fieldErrors, setFieldErrors] = useState({
    password: "",
    confirmPass: "",
    token: "",
  });
  
  const HandleResetPassword = async () => {
    setLoader(true);
    setResetPassErr("");

    try {
      const response = await fetch(ENDPOINTS.CHANGE_PASSWORD, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: document.getElementById("newPassword").value,
          confirmedpassword: document.getElementById("repeatPassword").value,
          token: token,
        }),
      });

      const resData = await response.json();
      console.log(resData);
      setLoader(false);

      if (resData.mess) {
        if (resData.mess.StatusCodes === "U00") {
          setResetPassErr("Password has been successFully Changed.");
          setLoginBtn(true);
          // navigate(`/login`);
        } else {
          console.log(resData.mess.message);
          setResetPassErr(resData.mess.message);
        }
      } else if (resData.success === false) { 
        parseFieldErrors(resData.message);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error:", error);
      setResetPassErr("Internal Server Error. Please try again later.");
    }
  };

  const parseFieldErrors = (errorMessage) => {
    const fieldErrors = {
      password: "",
      confirmPass: "",
      token: "",
    };
    
    if (errorMessage.includes('"password"'))
      fieldErrors.password = "*password length must be at least 8 characters long, must contain one uppercase letter, one lowercase letter, and one digit";
    if (errorMessage.includes('"confirmedpassword"'))
      fieldErrors.confirmPass =
        "Password do not match";
    if (errorMessage.includes('"token"'))
      fieldErrors.token =
        "Token must be string";
    setFieldErrors(fieldErrors);
  };
  //allow form submission with the enter key
  document.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        document.getElementById('reset-button').click();
    }
  });

  return (
    <div>
      <section className="mt-5 py-5 enquiry-section1" id="stack4">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
              <div className="form">
                <h3 className="text-center">Reset Password</h3>
                <p className="text-center">
                  <a href="/" className="text-white">
                    <img
                      src="https://i.ibb.co/vzTTh9B/home.png"
                      alt="home-icon"
                      className="home-icon"
                    />{" "}
                    Home
                  </a>{" "}
                </p>

                {/* <div className="inputbox">
                  <label>Password</label>
                  <input type="text" id="newPassword" placeholder="New Password" />
                  <p className="msg text-warning">{fieldErrors.password}</p>
                </div>

                <div className="inputbox">
                  <label>Confirm Password</label>
                  <input type="text" id="repeatPassword" placeholder="Repeat Password" />
                  <p className="msg text-warning">{fieldErrors.confirmPass}</p>
                </div> */}
                 <PasswordInputStrength/>
                <p className="msg text-warning">{fieldErrors.token}</p>
                <span id="resetaPassError" className="text-warning">{resetPassErr}</span>
                {loginBtn && <div>
                                <Link to="/login">
                                  click here to login
                                </Link>
                            </div>}
                
                <div>
                  <button type="submit" id="reset-button" className="submitButton" onClick={HandleResetPassword}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
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
export default Resetpassword;