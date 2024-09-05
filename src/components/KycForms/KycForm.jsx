import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';



const url = "";

const KYCForm = () => {
    
    let navigate = useNavigate();
    const initialValues = {
        
    };

    const [values, setValues] = useState(initialValues);

    

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
        .then(navigate(`/dashboard`))
    }



    return(
        <div>
            
            <section className="kyc-form">
                    <div className="container" id="wrapper">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10">
                                <div className="wizard">
                                    <form role="form" action="index.html" className="login-box box8 p-5">
                                        <div className="tab-content" id="main_form">
                                            <div className="tab-pane active" role="tabpanel">
                                            <h4 className="text-center mb-4">C-KYC Form</h4>
                                            <div className="row">
                                                <div className="col-md-4 form-group">
                                                    <label >Your Name</label>
                                                    <input type="text" name="name" className="form-control"  placeholder="Enter Your Name" required/>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Date Of Birth</label>
                                                    <input type="Date" name="dob" className="form-control" id="Date" placeholder="" required/>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Gender</label>
                                                    <select className="form-control browser-default custom-select" id="gender" name="gender">
                                                        <option value="SelectGender">--Select Gender--</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>PAN Number</label>
                                                    <input type="text" name="pan_number" className="form-control" id="pan_num" placeholder="PAN Number" required/>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>PAN Image</label>
                                                    <input type="file" name="pan_image" className="form-control" id="pan_img" placeholder="PAN Number" required/>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Passport Size Photo</label>
                                                    <input type="file" name="passport_image" className="form-control" id="passport_img" placeholder="PAN Number" required/>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Address Details</label>
                                                    <select className="form-control" id="secondary">
                                                        <option  value="select">---Select One--- </option>
                                                        <option id="passport" value="passport">Passport</option>
                                                        <option id="driving_licence" value="driving_licence">Driving Licence</option>
                                                        <option id="voter_id" value="voter_id">Voter ID</option>
                                                        <option id="aadhar" value="aadhar">Aadhar</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Passport Number</label>
                                                    <input type="text" name="passport_number" className="form-control enable passport_document" placeholder="Passport Number" required disabled="true" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Passport File Number</label>
                                                    <input type="text" name="passport_file_number" className="form-control enable passport_document" placeholder="Passport File Number" required disabled="true" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label >Passport Image Front</label>
                                                    <input type="file" name="passport_img_front" className="form-control enable passport_document" placeholder="" required disabled="true" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Passport Image Back</label>
                                                    <input type="file" name="passport_img_back" className="form-control enable passport_document" placeholder="" required disabled="true" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Driving Licence Number</label>
                                                    <input type="text" name="driving_licence_number" className="form-control enable driving-licence_document" placeholder="Driving Licence Number" required disabled="true" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Driving Licence Image</label>
                                                    <input type="file" name="driving-licence_image" className="form-control enable driving-licence_document" placeholder="" required disabled="true" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Voter ID Number</label>
                                                    <input type="text" name="voter_id" className="form-control enable voter_id_document" placeholder="Voter ID Number" required disabled="true" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Voter ID Image Front</label>
                                                    <input type="file" name="voter_id_img_front" className="form-control enable voter_id_document" placeholder="" required disabled="true" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label >Voter ID Image Back</label>
                                                    <input type="file" name="voter_id_img_back" className="form-control enable voter_id_document" placeholder="" required disabled="true" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label >Aadhar Number</label>
                                                    <input type="text" name="aadhar" className="form-control enable aadhar_document" placeholder="Aadhar Number" required disabled="true" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label>Aadhar Image Front</label>
                                                    <input type="file" name="aadhar_img_front" className="form-control enable aadhar_document" placeholder="" required disabled="true" />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label >Aadhar Image Back</label>
                                                    <input type="file" name="aadhar_img_back" className="form-control enable aadhar_document" placeholder="" required disabled="true" />
                                                </div>
                                                
                                            </div>
                                            <ul className="list-inline pull-right d-flex">
                                                <li><button type="button" className="btn default-btn next-step mx-1" onClick={checkout}>Submit</button></li>
                                            </ul>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>   
                    </div>
                </section>
            
        </div>
    )
}

export default KYCForm;