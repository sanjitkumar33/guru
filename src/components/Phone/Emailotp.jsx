import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Emailotp.css'; 
import { PinInput } from "@mantine/core";

import { ENDPOINTS } from '../../utils/apiConfig';

let url = ENDPOINTS.VERIFY_EMAIL;

  const EmailVerifyOtp = ({ email }) =>{
    const[otp,setOtp] = useState('');
    const[ message,setMessage ] = useState('');
    const [loader, setLoader] = useState(false);
    const [value, setValue] = useState('');
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
    const emailVerifyOtp= async () => {
        try {
          const response = await axios.post(url, { email, otp });
          setLoader(false);
          setMessage(response.data.message);
        } catch (error) {
          setMessage('Invalid OTP. Please try again.');
        }
    };
// allow form submission for enter button
  document.addEventListener('keydown', function(event){
  if (event.key === 'Enter') {
    document.getElementById('email-button').click();
  }
  });
  

  return (
    <div>
    
    <section className="mt-5 py-5 enquiry-section1" id="stack3">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2 col-12 "></div>
                <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
                    <form className="form">
                        <h3 className="text-center">Email Verification</h3>
                        <p className="text-center"><a href="/" className="text-white"><img src="https://i.ibb.co/vzTTh9B/home.png" alt="home-icon"/> Home</a> </p>

                        <div className="inputbox">
                        <label>Enter Your Email OTP</label>
                        {/* <input type="text" id="" name="" value={otp}
                        maxLength="6" onChange={(e) => setOtp(e.target.value)}/> */}
                      <div className='d-flex justify-content-center mt-5'>
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
                     
                         </div>

                        
                        {/* <button type='submit' id='email-button' className="submitButton" onClick={emailVerifyOtp}>
                        Submit
                        </button> */}
                       <button 
                    type="submit" 
                    id="mail-button" 
                    className="submitButton" 
                    onClick={emailVerifyOtp} 
                    disabled={!value || !isTimerActive} // Disable submit button when no value or timer is not active
                  >
                    Submit
                  </button>
                      {message && <p>{message}</p>}
                         <div className="inputbox text-center">
                        
                        </div>

                        {/* <input type="Submit" value="Resend Otp" className="submit"/> */}
                        <div className="inputbox text-center">
                       </div>
                       <div>
                  {/* Render timer and disable button logic */}
                  <div className="text-center mt-3">
                    {isTimerActive ? (
                      <span>Resend OTP in {formatTime(timerSeconds)}</span>
                    ) : (
                      <a href="#" type="Submit" onClick={handleResendOtpClick} className="text-white">Resend OTP</a>
                    )}
                  </div>
                </div>
                    </form>
                </div>
                <div className="col-lg-3 col-md-2 col-12 "></div>
            </div>
        </div>
    </section>
    <div className="loaderContainer">
        <div className="inputbox text-center loader-box">
          {loader && <img src={'loadingImg'} alt='loading...' className="loaderImg" />}
        </div>
      </div>


    </div>
  )
}

export default EmailVerifyOtp;
