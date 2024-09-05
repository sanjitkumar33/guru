import React, {useState} from 'react';
import './Resetwelcomes.css';
import Header from '../Header';
import Footer from '../Footer';





const Resetwelcome = ({ username }) => {

  const [values, setValues] = useState();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
};




  return (
    <div>
    <Header/>
    <div className="register-success-container">
      <h2>Welcome To PayuGuru {username}!</h2>
       <p>Your password has been successful Reset!</p>
       <div className="inputbox text-center" onClick={handleInputChange}>
      <p>You can Login Here.. <a href='/Login'> Login </a></p> 
    </div>
    </div>
    
    <Footer/>
    </div>
  );
};

export default Resetwelcome;
