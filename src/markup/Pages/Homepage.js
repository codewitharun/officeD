import React,{Component} from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer1';
import HomeOwlSlider from '../Element/HomeOwlSlider';
import HomeOwlSlider2 from '../Element/HomeOwlSlider2';
import ImgCarouselContent from '../Element/ImgCarouselContent';
import HomeTab from '../Element/HomeTab';
import Counter from '../Element/Counter';
import PortfolioCarousel from '../Element/PortfolioCarousel';
import TestimonialCarousel from '../Element/TestimonialCarousel';
import FormStyle from '../Element/FormStyle';
// import  onplayVideo from '../Layout/HomepageVideo'
import video from "../../images/video/DummyVideo.mp4"
//Images
import pic4 from './../../images/about/pic4.jpg';
import bgimg from './../../images/background/bg1.jpg';
import bgimg2 from './../../images/background/bg-map.jpg';
import bgimg3 from './../../images/background/bg1.jpg';
import Ourteam from '../Element/ourTeam';


class Homepage extends Component{
		
	componentDidMount() {
		
	}	
	
	render(){
		return(
			<div className="page-wraper">
				<Header />
				<div className="page-content bg-white">
					{/*  Slider Banner */}
					<div className="owl-slider-banner main-slider">
						<HomeOwlSlider />
						{/*  Service   */}
						<div className="service-box-slide">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<ImgCarouselContent />
									</div>
								</div>
							</div>
						</div>
						{/*  Service End  */}
					</div>
					{/*  Slider Banner */}
					<div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full bg-white content-inner-1 about-us">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-7 col-md-8">
                                        <div className="abuot-box row" >
                                            <div className="col-lg-4">
                                                
                                                <h4 className="text-gray-dark">We use the latest techniques in the web design industry to create and showcase websites which are fast, economical, and well crafted. </h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>Dileepchauhan.com is a creative web design and development company with over 10 years of experience. It is headquartered in Gurgaon and run by Dileep Chauhan. The services range from website development to mobile applications and even app store marketing. <p>Our team is among the best in the industry. As a result, our website development process is smooth and swift. We do our best to keep our clients in the loop with the latest web design trends. We also create a website that is responsive to your every need.
It is our main goal to make your web design experience enjoyable.</p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-4 about-img" >
                                        <img src={pic4} data-tilt alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Us End --> */}
						{/* <!-- Our Services --> */}
                        <div className="section-full content-inner-2">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">Our Services</h4>
                                    <h2 className="box-title m-tb0">Web Development Services<span className="bg-primary"></span></h2>
                                    <p>We build customer-centric websites that are relevant, appealing and unique to each client. You can be rest assured of our support as we have a large team of dedicated experts who work very hard to help you achieve your online business goals.</p>
                                </div>
                            </div>
                            <div className="development-box">
                                <div className="container">
                                    <HomeOwlSlider2 />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
						{/* <!-- Why Chose Us --> */}
                        <div className="section-full content-inner-1 overlay-primary choseus-tabs  bg-img-fix" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                            <div className="container">
                                <div className="section-head text-white text-center">
                                    <h2 className="box-title m-tb0">Why Chose Us<span className="bg-primary"></span></h2>
                                    <p>The reason why you should choose our company for your website and mobile apps project is that we work in conjunction with international brands and have experience from over 1000 successful projects. All our clients have been satisfied with our quality of work. All of our projects will be executed in a professional way and according to the estimation you give us. We are confident about our work and that is why we keep the best results for all our clients.</p>
                                    <video autoPlay src={video} width="750" height="500" controls> </video>
                                </div>
                            </div>

        
							<HomeTab />
							<div className="choses-info text-white">
                                <Counter />
                            </div>
						</div>	
						{/* <!-- Why Chose Us End --> */}
{/* Portfolio section Starts here */}
<div className="section-full content-inner-1 mfp-gallery">
                            <div className="container-fluid">
                                <div className="section-head text-center">
                                    <h4 className="text-gray-dark m-b10">Our Team</h4>
                                    
                                    <h5> Emphasing the importance of technology in bussiness to new bussiness owners, especially for small and medium size bussiness owners.    </h5>
                                </div>
                                    {/* <PortfolioCarousel /> */}
                                    <Ourteam />
                            </div>
                        </div>

{/* Portfolio section ends here */}

                         
						{/* <!-- Our Portfolio --> */}
                        <div className="section-full content-inner-1 mfp-gallery">
                            <div className="container-fluid">
                                <div className="section-head text-center">
                                    <h4 className="text-gray-dark m-b10">Our Portfolio</h4>
                                    
                                    <h5>We work to innovate creative solutions to improve the lives of our partners and our customers and are committed to doing what's right for the planet.</h5>
                                </div>
                                    <PortfolioCarousel />
                            </div>
                        </div>
                        {/* <!-- Our Portfolio END --> */}
						{/* <!-- Testimonials --> */}
                        {/* <!-- <div className="section-full content-inner" style={{ backgroundImage: "url(" + bgimg2 + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
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
						
						{/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bgimg3 + ")" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
						
					</div>
				</div>	
				<Footer />
				
			</div>		
		)
	}
}
export default Homepage;