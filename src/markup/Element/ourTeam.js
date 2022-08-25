import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox';

//Images
// import pic1 from './../../images/project/pic1.jpg';
// import pic2 from './../../images/project/pic2.jpg';
// import pic3 from './../../images/project/pic3.jpg';
// import pic4 from './../../images/project/pic4.jpg';
// import pic5 from './../../images/project/pic5.jpg';
import pinki from './../../images/our-team/Pinki.jpg'
import arun from './../../images/our-team/Arun.jpg'
import priyanka from './../../images/our-team/pinku.jpg'
import azeema from './../../images/our-team/azima.jpg'
import dileep from './../../images/our-team/dilipsir.jpg'
const contentBlog =[
	{images: dileep, tech: "Ceo&Founder", site: "https://www.linkedin.com/in/dileep-chauhan-5a87a3147/", name: "Dileep Chauhan"},
	{images: priyanka, tech: "Php/Wordpress Developer", site: "https://www.linkedin.com/in/priyanka-saini-563204193", name: "Priyanka Saini" },
	{images: arun, tech: "React native Developer", site: "https://www.devarun.site", name: "Arun Kumar" },
	{images: pinki, tech: "Junior BDE ", site: "https://www.homeclearance.com.au/", name: "Pinki Yadav" },
	// {images: jaswant, tech: "Django Developer", site: "https://cdk9raw.com.au/ ", name: "Jaswant Kumar" },
    {images: azeema, tech: "Sales Manager ", site: "https://www.linkedin.com/in/aazeemah-farooq-11751086", name: "Aazeema Farooq" },
		
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


class Ourteam extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
			speed: 3000,
			navSpeed: 3000,	
            infinite:false,
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
													{/* <p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
													 <a href={item.images} className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a>  */}
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

export default Ourteam;