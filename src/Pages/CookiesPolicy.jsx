import React from "react";
import './CookiesPolicy.css';
import Header from '../Header';
import Footer from '../Footer';

function CookiesPolicy(){
    return(
        <>
            <Header/>
            <section className="mt-0 py-5 security-section">
                <div className="container box8 mt-0 p-0">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <h3>Cookies Policy</h3>
                            <div className="text-justify">
                                <h5>What are Cookies-</h5>
                                <p>The term "cookies" refers to small pieces of information that a website sends to your computer's
                                    hard drive while you are viewing the site. We may use both session cookies (which expire once you
                                    close your browser) and persistent cookies (which stay on your computer until you delete them).
                                    Persistent cookies can be removed by following your browser help file directions. If you choose 
                                    to disable cookies, some areas of PayuGuru may not work properly or at all.
                                </p>
                                <h5>Manage your cookie settings-</h5>
                                <p>
                                    You get to control how we use cookies on each device and browser you use. These settings will apply
                                     to your current device when you use Chrome.
                                </p>
                                <ol>
                                    <li>Marketing Cookies-</li>
                                    <p>We use marketing cookies to deliver ads we think you'll like.
                                        For example, marketing cookies let us show you personalized PayuGuru ads based on your interests.
                                    </p>
                                    <p>See our partners:<br/>Marketing partners</p>
                                    <p>We work with a number of partners to show you ads for PayuGuru products and services. The 
                                        partners listed here may use your information in accordance with their privacy policies. You
                                        can control how these partners use your information with the links below.</p>
                                    
                                    <div className="row">
                                        <div className="col-lg-6">
                                            a. Google
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="">Manage Google ad settings</a>
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-lg-6">
                                            b. Facebook
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="">Manage Facebook ad settings</a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                        c.	LinkedIn
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="">Manage LinkedIn ad settings</a>
                                        </div>
                                    </div>
                                    <li>Performance Cookies-</li>
                                    <p>We use performance cookies to understand how you interact with our site.</p>
                                    <p>For example, performance cookies help us learn which parts of PayuGuru are the most popular and
                                       which parts we could improve for you.</p>
                                    <li>Functional Cookies-</li>
                                    <p>We use functional cookies to customize your experience.</p>
                                    <p>For example, functional cookies let us remember your preferences like language, country or 
                                       region and text sizes.</p>
                                    <li>Essential Cookies-</li>
                                    <p>We use essential cookies to make our site work for you.</p>
                                    <p>For example, essential cookies let you securely sign in and browse our site. These cookies help 
                                       us keep your account safe and prevent fraud.</p>
                                    <li>Targeting Cookies:</li>
                                    <p>These cookies record your visit to our website, the pages you have visited, and the links you 
                                        have followed. We use this information to make our website and the advertising displayed on it
                                        more relevant to your interests.</p>
                                </ol>
                                <div className="text-justify">
                                    <h5>How We Use Cookies-</h5>
                                    <ol>
                                        <li>Authentication: We use cookies to recognize you when you sign in to our platform. This 
                                            allows us to provide you with personalized content and services.</li>
                                        <li>Security: Cookies help us detect and prevent security risks. They also support and
                                            enforce security features and comply with legal requirements.</li>
                                        <li>Preferences: Cookies store your preferences and settings, such as language preferences, 
                                            so you don't have to set them up every time you visit.</li>
                                        <li>Analytics: We use cookies to analyze how our visitors use our website and to monitor 
                                            website performance. This helps us improve the user experience.</li>
                                    </ol>
                                    <h5>Managing Cookies-</h5>
                                    <p>You can control and manage cookies in various ways by choosing one those which suit for your
                                        satisfaction and convenience for the usage of our services. Please note that removing or 
                                        blocking cookies may affect your user experience and some parts of our website may no longer 
                                        be accessible.</p>
                                    <h5>Changes to This Cookie Policy-</h5>
                                    <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page
                                       with the effective date.</p>
                                    <h5>Contact Us-</h5>
                                    <p>If you have any questions about our Cookie Policy, please contact us at 
                                        <a href="#"> reachus@payu.guru</a>.</p>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default CookiesPolicy;