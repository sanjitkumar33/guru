import React from "react";
import './Footer.css';


const Footer = () =>{
    return(
        <div>
        <footer id="support" className="footer-px-5">
        <div className="container-fluid">
            <div className="row ">
                <div className="row footer-top ">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                        <h2 className="my-1 text-light">Subscribe to get daily<br></br> news updates</h2>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                        <div className="footer-signup">
                            <form action="" method="POST">
                                <input type="email" name="Subscribe" id="email-signup" placeholder="Enter your email" required/>
                                <input type="submit" value="Subscribe" name="entry" id="btn"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-12 col-md-4 col-12 mb-3">
                    <div className="mb-4 footer-logo">
                        <a href="index.asp"><img src="https://i.ibb.co/ZzLf3bD/logo-footer.png"  alt="logo" width="150"
                            height="25px"/></a>
                    </div>
                    <h3 className="text-white my-1">Follow Us</h3>
                    <div className="text-left align-center">
                        <ul className="footer-social-link">
                            <li className="facebook">
                                <a href="https://www.facebook.com/profile.php?id=61555659393005" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li className="twitter">
                                <a href="https://twitter.com/payuguru" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li className="instagram">
                                <a href="https://www.instagram.com/pay_u_guru/?hl=en" aria-label="Instagram"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li className="linkedin">
                                <a href="https://www.linkedin.com/company/99346088/admin/feed/posts/" aria-label="Linkedin"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3 footer-sm-none">
                    <h4 className="footer-heading">Accept Payments</h4>
                    <ul className="footer-list">
                        <li>
                            <a href="#">UPI Collection Request</a>
                        </li>
                        <li>
                            <a href="#">UPI Intent</a>
                        </li>
                        <li>
                            <a href="#">Dynamic UPI QR Code</a>
                        </li>
                        <li>
                            <a href="#">Create Dynamic UPI ID</a>
                        </li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3 footer-sm-none">
                    <h4 className="footer-heading">Company</h4>
                    <ul className="footer-list">
                        <li>
                            <a href="/AmlPolicy">AML Policy</a>
                        </li>
                        <li>
                            <a href="/PrivacyPolicy">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/CookiesPolicy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="/RedressalPolicy">Grievance Redressal Policy</a>
                        </li>
                        <li>
                            <a href="/TermsandCondition">Terms & Conditions</a>
                        </li>
                    </ul>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-3 footer-sm-none pl-0">
                    <h4 className="footer-heading">Solutions</h4>
                    <ul className="footer-list">
                        <li>
                            <a href="#">Education Services</a>
                        </li>
                        <li>
                            <a href="#">Travel And Hospitality</a>
                        </li>
                        <li>
                            <a href="#">Entertainment And Streaming Services</a>
                        </li>
                        <li>
                            <a href="#">Healthcare And Wellness</a>
                        </li>
                        <li>
                            <a href="#">Government Services</a>
                        </li>
                        <li>
                            <a href="#">Utilities And Bill Payment</a>
                        </li>
                    </ul>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-3 footer-sm-none contact-info">
                    <h4 className="footer-heading">Contact Info</h4>
                    <p><a href="#">
                        <i className="fa fa-envelope footer-icon mr-3"></i>info@payu.guru</a></p>
                    <p><a href="#">
                        <i className="fa fa-envelope footer-icon mr-3"></i>marketing@payu.guru</a></p>
                    <p className=""><a href="#">
                        <i className="fa fa-map-marker footer-icon fa-lg mr-3"></i>Head  Office  Address:-Nagpur, Maharashtra-440024</a>
                    </p>
                    <p className=""><a href="#">
                        <i className="fa fa-map-marker footer-icon fa-lg mr-3"></i>Branch Office Pune Address:-wakad,pune 411027</a>
                    </p>
                    <p className=""><a href="#">
                        <i className="fa fa-map-marker footer-icon fa-lg mr-3"></i>Branch Office:- HITEC City, Madhapur, Hyderabad 500084</a>
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 col-12 mb-3 ">
                    <li className="responsive-link footer-sm-block d-none">
                        <a href="#topup" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>Accept Payments</span></a>
                        <ul className="footer-list collapse list-unstyled" id="topup">
                            <hr className="hr"></hr>
                            <li>
                            <a href="#">UPI Collection Request</a>
                            </li>
                            <li>
                                <a href="#">UPI Intent</a>
                            </li>
                            <li>
                                <a href="#">Dynamic UPI QR Code</a>
                            </li>
                            <li>
                                <a href="#">Create Dynamic UPI ID</a>
                            </li>
                        </ul>
                    </li>
                </div>
                <div className="col-lg-3 col-md-3 col-12 mb-3 ">
                    <li className="responsive-link footer-sm-block d-none">
                        <a href="#policy" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>Company</span></a>
                        <ul className="footer-list collapse list-unstyled" id="policy">
                            <hr className="hr"></hr>
                            <li>
                                <a href="/AmlPolicy">AML Policy</a>
                            </li>
                            <li>
                                <a href="/PrivacyPolicy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/CookiesPolicy">Cookies Policy</a>
                            </li>
                            <li>
                                <a href="/RedressalPolicy">Grievance Redressal Policy</a>
                            </li>
                            <li>
                                <a href="/TermsandCondition">Terms & Conditions</a>
                            </li>
                        </ul>
                    </li>
                </div>
                <div className="col-lg-3 col-md-3 col-12 mb-3">
                    <li className="responsive-link footer-sm-block d-none">
                        <a href="#solution" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>Solutions</span></a>
                        <ul className="footer-list collapse list-unstyled" id="solution">
                            <hr className="hr"></hr>
                            <li>
                            <a href="#">Education Services</a>
                            </li>
                            <li>
                                <a href="#">Travel And Hospitality</a>
                            </li>
                            <li>
                                <a href="#">Entertainment And Streaming</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Healthcare And Wellness</a>
                            </li>
                            <li>
                                <a href="#">Government Services</a>
                            </li>
                            <li>
                                <a href="#">Utilities And Bill Payment</a>
                            </li>
                        </ul>
                    </li>
                </div>
                <div className="col-lg-3 col-md-3 col-12 mb-3">
                    <div className="responsive-link footer-sm-block d-none">
                        <a href="#contact" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>Contact Info </span></a>
                        <div className="footer-list collapse contact-info-sm" id="contact">
                            <hr className="hr"></hr>
                            <p>
                                <a href="#">
                            <i className="fa fa-envelope footer-icon mr-3"></i>info@payu.guru</a></p>
                            <p>
                                <a href="#"><i className="fa fa-envelope footer-icon mr-3"></i>marketing@payu.guru</a></p>
                            <p className=""><a href="#">
                            <i className="fa fa-map-marker footer-icon fa-lg mr-3"></i>Head Office Address: Nagpur, Maharashtra-440024</a></p>
                            <p className=""><a href="#">
                            <i className="fa fa-map-marker footer-icon fa-lg mr-3"></i>Branch Office - Pune Address : wakad,pune -411027</a></p>
                            <p className=""><a href="#">
                            <i className="fa fa-map-marker footer-icon fa-lg mr-3"></i>Branch Office HITEC City, Madhapur, Hyderabad- 500084</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright d-flex flex-row px-4">
                <p className="mr-auto footer-left">Copyright @2023.Arena ITech.</p>
                <p className="ml-auto footer-right"><a href="/cookiespolicy">Cookies Policy</a> | <a href="/redressalpolicy">Grievance Redressal Policy</a></p>
            </div>
        </div>
    </footer>
    <a href="http://tinyurl.com/ye23evm3" className="float" target="_blank">
        <i className="fa fa-whatsapp my-float"></i>
    </a>
    <a href="tel:9505053537" className="phone" target="_blank">
        <i className="fa fa-phone phone-float"></i>
    </a>
            
        
        </div>
    )
}
export default Footer;