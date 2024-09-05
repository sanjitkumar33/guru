import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Success.css";
import Header from "../../Header";
import Footer from "../../Footer";
import { Button } from "@mui/material";
import { ENDPOINTS } from "../../utils/apiConfig.js";

const RegisterSuccessPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const Email_Check = ENDPOINTS.VERIFY_EMAIL;


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(Email_Check, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token
            
          }),
        });
    
        const resData = await response.json();
    
        if (resData.mess) {
          if (resData.mess.StatusCodes === "E00") {
            console.log(resData.mess.message);
            setLoading(false);
          } else {
            console.log(resData.mess.message);
            setError("Verification failed. Please try again.");
            setLoading(false);
          }
        } else if (resData.message) {
          // Handle the 'Internal Server Error' case
          console.log(resData.message);
          setError("Verification failed. Please try again.");
          setLoading(false);
        } else {
          // Handle unexpected response structure
          console.error("Unexpected response structure:", resData);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (token) {
      verifyToken();
    } else {
      setError("Invalid token.");
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
 

  return (
    <div>
      <Header />
      <div className="register-success-container">
        <h2>Welcome To PayUGuru !</h2>
        <p>Your registration was successful. Thank you for joining us!</p>
        <div className="inputbox text-center">
          <p>
            You can Login Here...
          </p>
          <Link to="/Login">
            <Button variant="contained" color="success">
              Login
            </Button>
          </Link>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterSuccessPage;
