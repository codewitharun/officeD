import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import SectionCounter from './../../Element/SectionCounter';
import TestimonialCarousel from './../../Element/TestimonialCarousel';
import FormStyle from './../../Element/FormStyle';

//Images
import bnr1 from './../../../images/banner/bnr4.jpg';
import bgmap from './../../../images/background/bg-map.jpg';
import bg1 from './../../../images/background/bg1.jpg';
import about from './../../../images/about/pic3.jpg';

const iconWraper=[
	{icon: <i className="flaticon-devices" />, title:'Custom Applications'},
	{icon: <i className="flaticon-pen" />, title:'Dynamic Website'},
	{icon: <i className="flaticon-layers" />, title:'CMS Development'},
	{icon: <i className="flaticon-shop" />, title:'PHP based E-commerce'},
	{icon: <i className="flaticon-technology" />, title:'CMS Development'},
	{icon: <i className="flaticon-internet" />, title:'Cloud (SaaS, PaaS)'},
];

const titleBlog=[
	{title1:'Web', title2: 'Portals', content: 'we create web portals to help you improve the productivity of your workplace. '}, 
	{title1:'Mobile', title2: 'Web Services', content: 'It recognizes text on the mobile device and refers to the respective translation service if needed.'}, 
	{title1:'Backend', title2: 'Solutions', content: 'We help medium and large financial institutions improve their operational efficiency by reducing cost and increase customer satisfaction. '}, 
	{title1:'Social Networking', title2: 'Development', content: 'We are expert in social network development , from bottom-up and top-down. We are great at it. We have all created successful products and services that attract more users than their competition, but we do not do this for you.'}, 
	{title1:'eCommerce', title2: 'Solution', content: 'Our company provides ecommerce solutions to a wide range of customers. Our experts are knowledgeable and experienced in the field of digital transformation and develop innovative, custom-made solutions.'}, 
	{title1:'PHP', title2: 'Frameworks', content: 'We work in all major php frameworks CodeIgniter, Laravel, CakePHP and Zend Framework. We offer domain and custom authentication, user roles and access control and more.' }, 
];

class ServicesDetails extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Services Details' activeMenu='Services Details' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner exp-services">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-black text-center">
                                            <h4 className="text-gray-dark font-weight-500 m-b10">Website design, development and mobile applications</h4>
                                            
                                            <p className="font-weight-300 font-18">Our focus is on various aspects of business development and such opportunities are not available at every corner. We assure that we provide our customers with solutions in a timely manner at the most affordable costs.</p>
                                        </div>
                                        <div className="row serv">
											{iconWraper.map((data,index)=>(	
												<div className="col-lg-2 col-md-4 col-sm-6 m-b30" key={index}>
													<div className="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
														<div className="icon-bx-sm bg-primary radius m-b20">
															<Link to={"#"} className="icon-cell">{data.icon}</Link>
														</div>
														<div className="icon-content">
															<h5 className="dlab-tilte"><Link to={"#"}>{data.title}</Link></h5>
														</div>
													</div>
												</div>
											))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        {/* <!-- About Us --> */}
                        <div className="section-full">
                            <div className="container-fluid">
                                <div className="row dzseth">
                                    <div className="col-lg-6 col-md-12 p-a0 img-fix">
                                        <img src={about} alt="" className="img-cover" />
                                    </div>
                                    <div className="col-lg-6 col-md-12 bg-black-light p-lr0 dis-tbl">
                                        <div className="p-a30 dis-tbl-cell ">
                                            <div className="max-w500 m-auto p-tb30">
                                                <div className="row">
                                                    <div className="col-lg-12 text-white">
                                                        <h3 className="box-title m-b10">How We Work<span className="bg-primary"></span></h3>
                                                        <h5 className="m-b30">we are big enough to fit a lot of people and we are supported by a great team.</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 m-b30 chosesus-content">
                                                       
                                                        <p>For over a decade we have offered amazing web development services. It has come to our attention that some of our clients feel we can be overly aggressive in the work we deliver. Our project managers work very hard to keep our standards as high as they can be.</p>
                                                        <p>You may not agree with our programming policies or our approach to development. No problem! We feel very strongly that you are completely justified in demanding better value for money and a better level of service. We have a proven track record of delivering high quality work on time, which has been 100% approved by our clients. We work hard to treat our customers and our subcontractors fairly, so please have no fear that we will ever do anything to compromise your satisfaction with the services we provide.</p>
                                                        <Link to={"#"} className="site-button radius-xl outline white">Read More <i className="fa fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Us End --> */}
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                   
                                    <h2 className="box-title m-tb0">Design and Development Services<span className="bg-primary"></span></h2>
                                    <p>Our team will be leading the development efforts for the project. In line with our commitment to data privacy, we will share more information about the project and how the company is working to ensure the safety of the user data as soon as we can.</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
									{titleBlog.map((data,index)=>(
										<div className="col-lg-4 col-md-6 col-sm-6 m-b30" key={index}>
											<div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
												<div className="icon-content">
													<h4 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title1}	<br/>{data.title2}</Link></h4>
													<p>{data.content}</p>
													<Link to={"/contact"} className="site-button radius-xl outline outline-2">Contact Us</Link>
												</div>
											</div>
										</div>
									))}                                    
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
						{/* <!-- Why Chose Us --> */}
							<SectionCounter />
                        {/* <!-- Why Chose Us End --> */}
                        {/* <!-- Testimonials --> 
                        <div className="section-full content-inner"   style={{ backgroundImage: "url(" + bgmap + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Our Testimonials<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div className="section-content m-b30 ">
									<TestimonialCarousel /> 
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- Testimonials END --> */}
                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ServicesDetails;