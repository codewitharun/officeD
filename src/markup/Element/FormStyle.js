import React,{Fragment, Component} from 'react';

class FormStyle extends Component{
	render(){
		return(
			<Fragment>
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-5 content-inner chosesus-content text-white">
							<h2 className="box-title m-b15 " >We are working 24*7<span className="bg-primary"></span></h2>
							<p className="font-16 op8" >Interested in speaking about your business. Contact us for free consulation.</p>
							<h3 className="font-weight-500 m-b50 op6 " >By 399+ customers for 564+ Web and Mobile App development projects.</h3>
							<h4 className="" >& What you will get:</h4>
							<ul className="list-checked primary " >
								<li><span>100% guranteed work</span></li>
								<li><span>Payment Security</span></li>
								<li><span>Full support on all projects.</span></li>
							</ul>
						</div>
						<div className="col-lg-7 col-md-7 m-b30">
							{/* <form className="inquiry-form  dzForm"  action="script/contact.php">
								<div className="dzFormMsg"></div>
								<h3 className="box-title m-t0 m-b10">Let's grow your business <span className="bg-primary"></span></h3>
								<p>With our team, you will have a website that is state of the art and will serve all your needs for years to come.
</p>
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-user text-primary"></i></span>
												<input name="dzName" type="text" required className="form-control" placeholder="First Name" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
												<input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-email text-primary"></i></span>
												<input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Id" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
												<input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-file text-primary"></i></span>
												<input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
												<textarea name="dzMessage" rows="4" className="form-control" required placeholder="Tell us about your project or idea"></textarea>
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<div className="input-group">
												<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
												<input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Get A Free Quote!</span> </button>
									</div>
								</div>
							</form> */}
							            <form action="https://public.herotofu.com/v1/dcc37e90-250f-11ed-9dc3-136bfcd2b0ee" method="post" className="inquiry-form dzForm" target='_blank'>
 
 <div className="dzFormMsg"></div>
	 <h3 className="box-title m-t0 m-b10">Let's grow your business <span className="bg-primary"></span></h3>
	 <p>With our team, you will have a website that is state of the art and will serve all your needs for years to come.</p>
	 <div className="col-lg-12">
	 <div className="input-group">
					
					 <label for="name"  >Your Name</label>
<input name="Name" id="name" type="text"  required className="form-control ti-user text-warning input-group-addon"/>
				 </div>
				 </div>

				 <div className="col-lg-12">
	 <div className="input-group">
<label for="email">Your Email</label>
<input name="Email" id="email" type="email" required  className="form-control ti-user text-warning input-group-addon" />
</div>
</div>
<div className="col-lg-12">
<input type="submit" value=" Get A Free Quote!"  className="site-button button-lg" />
</div>
</form>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
export default FormStyle;