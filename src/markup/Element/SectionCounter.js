import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Counter from './Counter';

import bg1 from './../../images/background/bg1.jpg';

const iconBlog =[
	{icon: <i className="flaticon-pen" />,	   title: 'Creative', content: 'We are creative software company developing and publishing applications for desktops, smartphones, tablets, cloud and other computing platforms. We design our software to ensure it gets out to the public and into the hands of people who love creativity.'},
	{icon: <i className="flaticon-diamond" />, title: 'Innovative',content: 'Our company in Gurgaon, India is to help marketers achieve real business outcomes. We help businesses understand who their customers are, what drives their decision-making, and what it is they want.'},
	{icon: <i className="flaticon-devices" />, title: 'Functional', content: 'We are working with focus on Hypervisor, Cloud and Enterprise Integration and big data analytics. Our mission is to ensure the successful growth of enterprise applications in the era of intelligent edge and Cloud.'},
];

class SectionCounter extends Component{
	render(){
		return(
			<Fragment>
				<div className="section-full content-inner-1 overlay-primary about-service bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
					<div className="container">
						<div className="section-head text-white text-center">
							<h2 className="box-title m-tb0 max-w800 m-auto">It doesn't matter how much or little business experience you have, we can all start from an open, curious place. <span className="bg-primary"></span></h2>
							<p>Be excited, be willing to try new things, to create, and to become resourceful. And, in the meantime, share some of your unique experiences, insights and solutions with others.</p>
						</div>
					</div>
					<div className="container">
						<div className="row text-white">
							{iconBlog.map((item, index)=> (
								<div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index}>
									<div className="icon-bx-wraper bx-style-1 p-a30 center">
										<div className="icon-lg text-white m-b20"> <Link to={"#"} className="icon-cell text-white">{item.icon}</Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
											<p>{item.content}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="choses-info text-white">
						<Counter />
					</div>
				</div>	
			</Fragment>
		)
	}
}
export default SectionCounter;