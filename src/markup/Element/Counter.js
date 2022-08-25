import React,{Fragment,Component} from 'react';
import CountUp from 'react-countup';

const counterBlog = [
	{icon: <i className="ti-bag m-r10" />, num: '10',  title: 'Years in Business',},	
	{icon: <i className="ti-user m-r10" />, num: '399',    title: 'Satisfied Clients',},	
	{icon: <i className="flaticon-users m-r10" />, num: '10',   title: 'Programmers and Designers',},	
	{icon: <i className="ti-mobile m-r10" />, num: '564', title: 'Web and apps Delivered',},	
];

class Counter extends Component{
	render(){
		return(
			<Fragment>
				<div className="container-fluid">
					<div className="row choses-info-content">
						{counterBlog.map((data,index)=>(
							<div className="col-6 col-lg-3 col-md-3 col-sm-6 p-a30">
								<h2 className="m-t0 m-b10 font-weight-400 font-45">{data.icon}<span className="counter"><CountUp end={data.num} duration={4}/></span>+</h2>
								<h4 className="font-weight-300 m-t0">{data.title}</h4>
							</div>
						))}
					</div>
				</div>
			</Fragment>
		)
	}
}
export default Counter;