import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';

import bgimg from './../../images/background/bg2.jpg';

class Contact extends Component {

    render() {
        return (
            <>
                <Header />
                <div className="full-section">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary-dark contact-page" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-xs-4">
                                    <div className="row text-white">
                                        <div className="col-lg-12 col-md-6 m-b30" >
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-location-pin"></i></span>
                                                        Company Address
													</h5>
                                                    <p>137/B3, Spaze Itech Park, Sec-49, 122002, Gurgaon, Haryana, IN</p>
                                                    <h6 className="m-b15 font-weight-400"><i className="ti-alarm-clock"></i> Office Hours</h6>
                                                    <p className="m-b0">Mon To Sat - 10.00-18.30</p>
                                                    <p>Sunday - Close</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-email"></i></span>
                                                        E-mail
													</h5>
                                                    <p className="m-b0">info@edileepchauhan.com</p>
                                                    <p className="m-b0">dileepchauhan25@gmail.com</p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-mobile"></i></span>
                                                        Phone Numbers
														</h5>
                                                    <p>+91 8052055746</p>
                                                    <p>+91 8318685043</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xs-8">
                                    <form className="inquiry-form dzForm"  action="script/contact.php">
                                        <div className="dzFormMsg"></div>
                                        <h3 className="box-title m-t0 m-b10">Let's grow your business <span className="bg-primary"></span></h3>
                                        <p>With our team, you will have a website that is state of the art and will serve all your needs for years to come.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                        <input name="dzName" type="text" required className="form-control" placeholder="First Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                        <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                        <input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Id" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
                                                        <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-file text-primary"></i></span>
                                                        <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Tell us about your project or idea"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                        <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Get A Free Quote!</span> </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Contact;