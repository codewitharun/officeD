import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import SectionCounter from './../../Element/SectionCounter';
import TestimonialCarousel from './../../Element/TestimonialCarousel';
import FormStyle from './../../Element/FormStyle';

//Images
import  about9 from './../../../images/about/pic9.jpg';
import bg2 from './../../../images/background/bg-map.jpg';
import services1 from './../../../images/our-services/pic1.jpg';
import services2 from './../../../images/our-services/pic2.jpg';
import bg1 from './../../../images/background/bg1.jpg';

import bnr from './../../../images/banner/bnr2.jpg';

class Aboutus1 extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
					<div className="dlab-bnr-inr overlay-primary active" style={{ backgroundImage: "url(" + bnr + ")" }}>
						<PageTitle motherMenu='About Us' activeMenu='About Us' />
					</div>	
                    <div className="content-block">
                        <div className="section-full content-inner-2">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">About Us</h4>
                                    <h2 className="box-title m-tb0">We make every entrepreneur achieve their business goals<span className="bg-primary"></span></h2>
                                    <p>We are dedicated to help all CEO, Founder, graduates and professionals from different sectors, especially startups, from finding right partners, mentoring, acquiring good technology and making their business grow.</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-5 col-md-4 about-img">
                                        <img src={about9} data-tilt alt="" />
                                    </div>
                                    <div className="col-lg-7 col-md-8">
                                        <div className="abuot-box left row m-lr0 ">
                                            <div className="col-lg-4">
                                                
                                                <h4 className="text-gray-dark">We are constantly growing in the industry</h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>The things that we provide are Web design services, Android app development services, and now we will start offering iOS app development services too.</p>
                                                <p>If you are someone who is looking to hire the best designers to build your website, then you have found the best developers who offer a full range of services. Design of your website, web design, iOS app development, android app development is the thing that we do, as this is a common requirement from any startup.</p>
                                                <p className="m-b0">If you are looking to hire an app development company who is always working to improve the features of your phone, then we can do that too, as we can develop an app for the Android and iOS platform. The main focus is to develop a single app for both the platforms.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
						{ /* Counetr section */ }
							<SectionCounter />
						{ /* Counetr section End*/ }
							<VisionBlog />
							
                        {/* <!-- Testimonials --> */}
                       {/* <!-- <div className="section-full content-inner" style={{ backgroundImage: "url(" + bg2 + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Our Testimonials<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div className="section-content m-b30 ">
                                    <TestimonialCarousel />
                                </div>
                            </div>
                        </div> --> */}
                        {/* <!-- Testimonials END --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <FormStyle />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
function VisionBlog(){
	return(
		<>
			<div className="section-ful our-about-info content-inner-1 " style={{ backgroundImage: "url(" + bg2 + ")",backgroundPosition:"center" ,backgroundRepeat:"no-repeat" }}>
				<div className="container">
					<div className="section-head text-center">
						<h2 className="box-title m-tb0">Mission And Vision<span className="bg-primary"></span></h2>
						<p> we believe we can develop leaders within our organization who deliver the best in class results, both in performance and career advancement.</p>
					</div>
					<div className=" row dzseth  m-b30">
						<div className="col-lg-6 col-md-12 m-b30 about-img ">
							<img src={services1} data-tilt alt="" />
						</div>
						<div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
							<div className="dis-tbl-cell">
								<h3 className="box-title">Mision<span className="bg-primary"></span></h3>
								<p className="font-16"> Our mission is to help the under-served and under-developed market of the world to build their skills, opportunities and self-esteem and to empower them.</p>
								<p className="font-16">A big part of our jobs is helping people find out more about what products can do for them.</p>
								<p className="font-16">Our main focus is to provide clients with the highest quality liquid and bulk distribution services, marketing solutions and supply chain services. Our professional team provides clients with the knowledge and ability to meet their needs in a timely, cost-efficient and reliable manner.
</p>
							</div>
						</div>
					</div>
					<div className="row dzseth column-reverse">
						<div className="col-lg-6 col-md-12 dis-tbl text-justify">
							<div className="dis-tbl-cell">
								<h3 className="box-title">Vision<span className="bg-primary"></span></h3>
								<p className="font-16">
                                Our vision is to create an inclusive culture that values individual and collective achievements and works for the common good of all. 
								</p>
								<p className="font-16">	
                                Our perception is to provide the best technology-enabled products for different categories, at prices that are of great value to them.</p>
								<p className="font-16">
                                It's a sleek and easy-to-use site design that the company believes will inspire, motivate, and grow the new community of entrepreneurs, creatives, and doers in worldwide.
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 about-img ">
							<img src={services2} data-tilt alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}	

export {VisionBlog};
export default Aboutus1;