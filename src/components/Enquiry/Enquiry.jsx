import React from 'react';
import './Enquiry.css';
import Header from '../../Header';
import Footer from '../../Footer';





function Enquiry(){
    
            return( 
            <div>
			<Header/>
        	<section class="mt-0 py-5 enquiry1-section" >
			<div class="container mt-100">
				<div class="row">
					<div class="col-lg-3 col-md-2 col-12 "></div>
					<div class="col-lg-6 col-md-8 col-12">
						<form class="form">
							<h3>ENQUIRY FORM</h3>
					        <p class="text-center"><a href="/" class="text-white"><img src="assets/img/home.png" alt="home-icon"/> Home</a> </p>
					        <div class="inputbox">
					            <label>Your Name</label>
					            <input type="text" name="" id="" placeholder="Enter Your Name"/>
					            <p class="msg"></p>
					        </div>
					      	<div class="inputbox">
					            <label>Mobile Number</label>
					            <input type="text" name="" id="" placeholder="Enter Your Number"/>
					            <p class="msg"></p>
					        </div>
					      	<div class="inputbox">
					            <label>Email ID</label>
					            <input type="text" name="" id="" placeholder="Enter Your Email"/>
					            <p class="msg"></p>
					        </div>
					        
					        <input type="submit" value="Submit" class="submit"/>
					    </form>
					</div>
					<div class="col-lg-3 col-md-2 col-12 "></div>
				</div>
			</div>
		</section>

		<Footer/>
        </div>
   )
   
}
export default Enquiry ;