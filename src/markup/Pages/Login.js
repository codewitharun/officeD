import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from './../Layout/Footer1';
import PageTitle from './../Layout/PageTitle';

import bnr from './../../images/banner/bnr3.jpg'; 

const iconBlog = [
	{icon: <i className="fa fa-gift" />, title:'Free shipping on orders $60+',
		para:'Order more than 60$ and you will get free shippining Worldwide. More info.',	},
	{icon: <i className="fa fa-plane" />, title:'Worldwide delivery',
		para:'We deliver to the following countries: USA, Canada, Europe, Australia',	},
	{icon: <i className="fa fa-history" />, title:'60 days money back guranty!',
		para:'Not happy with our product, feel free to return it, we will refund 100% your money!',	},
];

class Login extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='Login' activeMenu='Login' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner shop-account">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2 className="font-weight-700 m-t0 m-b30">Login Your Account</h2>
                                </div>
                            </div>
                            <div>
                                <div className="max-w500 m-auto m-b30">
                                    <div className="p-a30 border-1 seth">
                                        <div className="tab-content nav">
                                            <form id="login" className="tab-pane active col-12 p-a0 ">
                                                <h4 className="font-weight-700">LOGIN</h4>
                                                <p className="font-weight-600">If you have an account with us, please log in.</p>
                                                <div className="form-group">
                                                    <label className="font-weight-700">E-MAIL *</label>
                                                    <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-weight-700">PASSWORD *</label>
                                                    <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
                                                </div>
                                                <div className="text-left">
                                                    <button className="site-button m-r5 button-lg radius-no">login</button>
                                                    <a data-toggle="tab" href="#forgot-password" className="m-l5"><i className="fa fa-unlock-alt"></i> Forgot Password</a>
                                                </div>
                                            </form>
                                            <form id="forgot-password" className="tab-pane fade  col-12 p-a0">
                                                <h4 className="font-weight-700">FORGET PASSWORD ?</h4>
                                                <p className="font-weight-600">We will send you an email to reset your password. </p>
                                                <div className="form-group">
                                                    <label className="font-weight-700">E-MAIL *</label>
                                                    <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                                </div>
                                                <div className="text-left">
                                                    <a className="site-button outline gray button-lg radius-no" data-toggle="tab" href="#login">Back</a>
                                                    <button className="site-button pull-right button-lg radius-no">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product END --> */}
                    </div>
					{ /* <-- Icon Blog and Order detail--> */}
						<OrderDetail />
					{/* <-- Icon Blog and Order detail End--> */}
                    
                    {/* <!-- contact area  END --> */}
                </div>

                <Footer />
            </>
        )
    }
}

function OrderDetail(){
	return(
		<>
			<div className="section-full p-t50 p-b20 bg-primary-dark text-white shop-action">
				<div className="container">
					<div className="row">
						{ iconBlog.map((data,index)=>(
							<div className="col-lg-4 col-md-4 col-sm-4" key={index}>
								<div className="icon-bx-wraper left m-b30">
									<div className="icon-md text-black radius">
										<Link to={"#"} className="icon-cell text-white">{data.icon}</Link>
									</div>
									<div className="icon-content">
										<h5 className="dlab-tilte">{data.title}</h5>
										<p>{data.para}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)	
} 
export {OrderDetail};
export default Login;