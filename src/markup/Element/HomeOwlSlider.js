import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

import Slider1 from './../../images/main-slider/slide1.jpg';
import Slider2 from './../../images/main-slider/slide2.jpg';
import Slider3 from './../../images/main-slider/slide3.jpg';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left" onClick={onClick} style={{zIndex:1 }}/>
	</div>
  );
}

class HomeOwlSlider extends Component{
	
	render(){
		var settings = {		
			arrows: true,
			dots: true,
            slidesToShow: 1,			
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
					
				  }
				}
			]
        };
		return(
			
			<Slider className="owl-slider owl-carousel owl-theme owl-none" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider1} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">Expect nothing less than perfect.</h2>
								<p>We provide pixel perfect quality work on all website design jobs. We are masters in web design and development. </p>
								<Link to ={"/contact"} className="site-button m-r10 white button-lg">Get Started</Link>
								<Link to ={"/services"} className="site-button outline outline-2 button-lg">How It Work</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider3} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">We use the latest techniques in the web design.<br/></h2>
								<p>We are fast, economical, and well crafted. With us, you will find amazing websites that look creative and also produce fast website results.</p>
								<Link to ={"/contact"} className="site-button m-r10 white button-lg">Get Started</Link>
								<Link to ={"/services"} className="site-button outline outline-2 button-lg">How It Work</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider2} className="w-100" alt=""/></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">Our team is among the best in the industry.</h2>
								<p>As a result, our website development process is smooth and swift. We do our best to keep our clients in the loop with the latest web design trends. can provide you with a website that meets all your needs and is in line with your branding.</p>
								<Link to ={"/contact"} className="site-button m-r10 white button-lg">Get Started</Link>
								<Link to ={"/services"} className="site-button outline outline-2 button-lg">How It Work</Link>
							</div>
						</div>
					</div>
				</div>
			</Slider>	
		)
		
	}
	
}

export default HomeOwlSlider;