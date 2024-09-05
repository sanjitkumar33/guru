import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Forgotun.css';
import { ENDPOINTS } from "../../utils/apiConfig";
import lodingImg from "../../assets/img/loading.gif";


const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);
  
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const response = await fetch(ENDPOINTS.FORGET_PASSWORD, {
        method: 'POST',
        headers: {
          accept: "application/json",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email
        }),
      });

      const data = await response.json();
      setMessage('A reset password email has been sent to your email.');
      setLoader(false);

      // Navigate to the login page after a successful response
      navigate('/');
    } catch (error) {
      setMessage('Error sending reset email.');
      setLoader(false);
    }
  };

    
    
    

    return (
        <div>
            <section className="mt-5 py-5 enquiry-section1" id='stack2'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-12 "></div>
                        <div className="col-lg-6 col-md-8 col-12">
                            <form className="form" onSubmit={handleSubmit}>
                                <h3 className="text-center">Forgot Password</h3>
                                <p className="text-center">
                                    <a href="/" className="text-white">
                                        <img src="https://i.ibb.co/vzTTh9B/home.png" alt="home-icon" /> Home
                                    </a>
                                </p>
                                <div className="inputbox">
                                    <label>Email</label>
                                    <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    />
                                    <p className="msg"></p>
                                </div>
                                
                            
                                
                                <button type="submit" className="submitButton" >
                                    Submit
                                </button>
                                <div className="inputbox text-center">
                                    <p>You Don't have An Account? <a href='/Register'>Register</a></p>
                                </div>
                                <div className="inputbox text-center">
                                    <p>Already Have An Account? <a href='/Login'>Login</a></p>
                                </div>
                            </form>
                            {message && <p>{message}</p>}
                        </div>
                        <div className="col-lg-3 col-md-2 col-12 "></div>
                      </div>
                      <div className="loaderContainer">
                        <div className="inputbox text-center loader-box">
                        {loader && <img src={lodingImg} alt='loading...' className="loaderImg"/>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForgotPasswordPage;
