import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Otppage.css';
import { ENDPOINTS } from '../../utils/apiConfig';

const url = ENDPOINTS.VERIFY_EMAIL;

var otp1 = "";

const Otppage = () => {
  
  let navigate = useNavigate();
  const initialValues = {
      
 };
  const [otp, setOtp] = useState("");
  const sendOTP = () => {
        
    for (let i = 0; i < 6; i++) {
        otp1 += Math.floor(Math.random() * 10);
    }
    setOtp(otp1);
    console.log(otp1);
}

const verifyOTP=()=>{
    let otp2 = document.getElementById("otp_input").value;
    if(otp1 == otp2)
    {
        alert("Your Email has been verified successfully");  
    }
    else(alert("Incorrect OTP"));
}

  const [values, setValues] = useState(initialValues);
  const [message,setMessage] = useState()

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        values,
        [name]: value,
      });
  };

  const checkout = () => {
      console.log(values)
      fetch(url,{
          method: 'POST',
          headers:{
              'accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(values)
      })
      .then((res) => res.json())
      .then((data) => {
          if(data.auth === false){
              setMessage(data.token)
          }else{
              sessionStorage.setItem('ltk',data.token)
              navigate(`/resetpassword`)
          }
      })
  }
  

  return (
    <div>
    
    <section className="mt-5 py-5 enquiry-section1">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-3 col-md-2 col-12 "></div>
                     <div className="col-lg-6 col-md-8 col-12">
                         <form className="form">
                             <h3 className="text-center">Enter Otp </h3>
                             <p className="text-center"><a href="/" className="text-white"><img src="https://i.ibb.co/vzTTh9B/home.png" 
							 alt="home-icon"/> Home</a> </p>

                             <div className="inputbox">
                                 <label>Enter Your Otp</label>
                                 <input type='text' id="otp_input" placeholder='Enter OTP' />
                                 <button className='btn' onClick={sendOTP}>Resend OTP</button>
                                 <p className="msg"></p>
                             </div>

                             <div>{otp}</div>

                             <input type="submit" value="SUBMIT" className="submit" onClick={checkout}/>
                             <div className="inputbox text-center">
                             <p>You Don't have An Account ? <a href='/Register'>  Register</a></p> 
							</div>

                             <div className="inputbox text-center">
                             <p>Already Have An Account ? <a href='/Login'> Login</a></p>
                              
                             </div>
                         </form>
                             
                    </div>
                     
                 </div>
             </div>
         </section>
    
    </div>
  )
}

export default Otppage;
