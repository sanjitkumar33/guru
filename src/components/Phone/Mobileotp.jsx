import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mobileotp.css";
import lodingImg from '../../assets/img/loading.gif';
import { ENDPOINTS } from "../../utils/apiConfig";
import { PinInput } from "@mantine/core";


const MobileVerifyPage = () => {
  const clientId2 = localStorage.getItem('clientId'); // value coming from local storage
  const [mobileOtpErr, setMobileOtpErr] = useState("");
  const [resendMobileOtpErr, setResendMobileOtpErr] = useState("");
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState('');
  let navigate = useNavigate();
  const [timerSeconds, setTimerSeconds] = useState(600); // 15 minutes in seconds
  const [isTimerActive, setIsTimerActive] = useState(true);

  
  // Countdown timer effect
  useEffect(() => {
    let intervalId;
    if (isTimerActive && timerSeconds > 0) {
      intervalId = setInterval(() => {
        setTimerSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerActive(false);
    }

    return () => clearInterval(intervalId);
  }, [isTimerActive, timerSeconds]);

  // Format seconds into minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Handle resend OTP button click
  const handleResendOtpClick = () => {
    // Handle logic to resend OTP here
    // Reset timer and re-enable input
    setTimerSeconds(600); // Reset timer to 15 minutes
    setIsTimerActive(true); // Reactivate the timer
    setValue('')
  };
  const mobileOtpVerify = async () => {
    setLoader(true);
    setMobileOtpErr("");
  
    try {
      const response = await fetch(ENDPOINTS.OTP_VERIFY, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: clientId2,
          otp: document.getElementById("mobileOtp").value,
        }),
      });
  
      const otpData = await response.json();
      setLoader(false);
  
      if (otpData.mess) {
        if (otpData.mess.StatusCodes === "M00") {
          console.log(otpData.mess.message);
          setMobileOtpErr(otpData.mess.message);

        } else {
          console.log(otpData.mess.message);
          setMobileOtpErr(otpData.mess.message);
        }
      } else if (otpData.message) {
        // Handle the 'Internal Server Error' case
        console.log(otpData.message);
        setMobileOtpErr(otpData.message);
      } else {
        // Handle unexpected response structure
        console.error("Unexpected response structure:", otpData);
        setMobileOtpErr("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setLoader(false);
      console.error("Error during OTP verification:", error);
      setMobileOtpErr("Internal Server Error. Please try again later.");
    }
  };


  const resendMobileOtp = async () => {
    setLoader(true);
    setMobileOtpErr("");
    setResendMobileOtpErr("");

    try {
      const response = await fetch(ENDPOINTS.RE_SEND_M_OTP, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: clientId2,
        }),
      });
  
      const otpData = await response.json();
      setLoader(false);
  
      if (otpData.mess) {
        if (otpData.mess.StatusCodes === "M302") {
          console.log(otpData.mess.message);
          setResendMobileOtpErr(otpData.mess.message);

        } else {
          console.log(otpData.mess.message);
          setResendMobileOtpErr(otpData.mess.message);
        }
      } else if (otpData.message) {
        // Handle the 'Internal Server Error' case
        console.log(otpData.message);
        setResendMobileOtpErr(otpData.message);
      } else {
        // Handle unexpected response structure
        console.error("Unexpected response structure:", otpData);
        setResendMobileOtpErr("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setLoader(false);
      console.error("Error during OTP verification:", error);
      setResendMobileOtpErr("Internal Server Error. Please try again later.");
    }
  }
  //allow form submission for enter button
  document.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
      document.getElementById('otp-button').click();
    }
  });
  

  return (
    <div>
      <section className="mt-5 py-5 enquiry-section1" id="stack3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
              <div className="form">
                <h3 className="text-center">Mobile Verification</h3>
                <p className="text-center">
                  <a href="/" className="text-white">
                    <img
                      src="https://i.ibb.co/vzTTh9B/home.png"
                      alt="home-icon"
                      className="home-icon"
                    />
                    Home
                  </a>
                </p>
                <div className="inputbox">
                  <label>Enter Your Mobile OTP</label>
                  <div className="d-flex justify-content-center py-5">
                    <PinInput 
                    // type="numeric" 
                    inputType="tel" 
                    mask
                    inputMode="numeric" 
                    aria-label="One time code"
                      value={value} 
                      onChange={(val) => setValue(val)}
                     id="mobileOtp"
                      length={6} // Ensure maximum length for OTP input
                      disabled={!isTimerActive} // Disable input when timer is not active
                      size="lg" // Adjust size as needed
                    />
                  </div>
                  <span id="mobileOtpError" className="text-warning">{mobileOtpErr}</span>
                  <span id="resendMobileOtpErr" className="text-warning">{resendMobileOtpErr}</span>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    id="otp-button" 
                    className="submitButton" 
                    onClick={mobileOtpVerify} 
                    disabled={!value || !isTimerActive} // Disable submit button when no value or timer is not active
                  >
                    Submit
                  </button>
                </div>
                <div className="inputbox text-center"></div>

                <div>
                  {/* Render timer and disable button logic */}
                  <div className="text-center mt-3">
                    {isTimerActive ? (
                      <span>Resend OTP in {formatTime(timerSeconds)}</span>
                    ) : (
                      <a href="#" onClick={handleResendOtpClick} className="text-white">Resend OTP</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="loaderContainer">
        <div className="inputbox text-center loader-box">
          {loader && <img src={'loadingImg'} alt='loading...' className="loaderImg" />}
        </div>
      </div>
    </div>
  );
};

export default MobileVerifyPage;