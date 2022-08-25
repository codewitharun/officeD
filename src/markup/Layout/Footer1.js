import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer1 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-uppercase">
                    <div className="footer-top bg-primary">
                        <div className="container" >
                            <div className="row">
                                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Company</h5>
                                        <ul>
											<li><Link to={"/"}>Home </Link></li>
                                            <li><Link to={"/about-1"}>About Us </Link></li>
                                            <li><Link to={"/services-details"}>Our Services</Link></li>
                                            <li><Link to={"/portfolio-full-width"}>Our Portfolio</Link></li>
                                            <li><Link to={"/contact"}></Link>Contact Us</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Useful Link</h5>
                                        <ul>
                                            {/* <li><Link to={"#"}>Create Account</Link></li> */}
                                            <li><Link to={"#"}>Company Philosophy </Link></li>
                                            <li><Link to={"#"}>Latest News</Link></li>
                                            <li><Link to={"#"}>Privacy Policy</Link></li>
                                            <li><Link to={"#"}>Terms and conditions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">Contact us</h5>
                                        <ul>
                                            <li><i className="ti-location-pin"></i><strong>address</strong> 137/B3, Spaze Itech Park, Sec-49, 122002, Gurgaon, Haryana, IN</li>
                                            <li><i className="ti-mobile"></i><strong>phone</strong>+91 8052055746 (24/7 Support Line)</li>
                                            <li><i className="ti-email"></i><strong>email</strong>info@dileepchauhan.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                                    <div className="widget">
                                        <h5 className="m-b30 text-white">Subscribe To Our Newsletter</h5>
                                        <p className="text-capitalize m-b20">If you have any questions, you can contact with us, so that we can give you a satisfying answer. Subscribe to our newsletter to get our latest products.</p>
                                        <div className="subscribe-form m-b20">
                                            <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                                <div className="dzSubscribeMsg"></div>
                                                <div className="input-group">
                                                    <input name="dzEmail" required="required" className="form-control" placeholder="Your Email Id" type="email" />
                                                    <span className="input-group-btn">
                                                        <button name="submit" value="Submit" type="submit" className="site-button">Subscribe</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="list-inline m-a0">
                                            <li><a target= "_blank" href="https://www.facebook.com/mr.dileep.chauhan/" className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></a></li>
                                            <li><a target= "_blank" href="https://www.linkedin.com/in/dileep-chauhan-5a87a3147/" className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a target= "_blank" href="https://www.instagram.com/mr.dileep.chauhan/" className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></a></li>
                                            <li><a target= "_blank" href="https://twitter.com/mrdileepchauhan" className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 text-left "> <span>Copyright © 2022 Dileep Chauhan</span> </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                                    <div className="widget-link ">
                                        <ul>
                                            <li><Link to={"#"}> Help Desk</Link></li>
                                            <li className="ml-1"><Link to={"#"}> Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer1;