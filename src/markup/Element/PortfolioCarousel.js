import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox';

//Images
import pic1 from './../../images/project/pic1.jpg';
import pic2 from './../../images/project/pic2.jpg';
import pic3 from './../../images/project/pic3.jpg';
import pic4 from './../../images/project/pic4.jpg';
import pic5 from './../../images/project/pic5.jpg';

const contentBlog =[
	{images: pic1, tech: "Shopify", site: "https://charlotte-stone.com/", name: "Charlotte Stone"},
	{images: pic2, tech: "JavaScript", site: "https://grumpyturtlecreative.com/ ", name: "Grumpyturtle Creative" },
	{images: pic3, tech: "Shopify", site: "https://www.hipoptical.com/", name: "Hipoptical" },
	{images: pic4, tech: "WordPress", site: "https://www.homeclearance.com.au/", name: "Home Clearance" },
	{images: pic5, tech: "Shopify", site: "https://cdk9raw.com.au/ ", name: "Cdk9 Raw" },
		
]
//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="mfp-link" title="Title Come Here">
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  )
}


class PortfolioCarousel extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
			speed: 3000,
			navSpeed: 3000,	
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<>
				<SimpleReactLightbox>
					<SRLWrapper >
						<Slider className="img-carousel-content owl-carousel text-center text-white owl-none " {...settings}>
							{contentBlog.map((item, index)=>(
								<div className="item p-3" key={index}>
									<div className="dlab-box portfolio-box">
										<div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src={item.images} alt="" />
											<div className="dlab-info-has p-a15 bg-primary">
												<a target="_blank" href={item.site} className="site-button outline radius-xl white pull-left">{item.tech}</a>
												<a target= "_blank" href={ item.site} className="site-button outline radius-xl white pull-right">Vist Site</a>
											</div>
											<div className="overlay-bx">
												<div className="overlay-icon text-white"> 
													<h5>{item.name}</h5>
													{/*<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
													 <a href={item.images} className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a> */ }
													<Iconimage />
													<a href={item.site} target="_blank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}	
						</Slider>
					</SRLWrapper >
				</SimpleReactLightbox>
			</>
		)
	}
	
}

export default PortfolioCarousel;