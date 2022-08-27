import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/FinalLogo.png';
import logo2 from './../../images/logo-black.png';
import HeaderMenu from './HeaderMenu';
import Wave from 'react-wavify';
import svgImage from '../../images/svg.png'
import svgImage2 from '../../images/svg2.png'
import { SvgIcon } from '@material-ui/core';
class Header extends Component {

	componentDidMount() {
        // sidebar open/close
		
        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
         //   Navicon.classList.toggle('open');
        }
        Navicon.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li > a, .sub-menu > li > a'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
		
		
        function checkLi(current) {
            current.parentElement.parentElement.querySelectorAll( "li" ).forEach( el =>
				(current.parentElement !== el) ? el.classList.remove('open') : ''
			);
			
			setTimeout(() => {
				current.parentElement.classList.toggle('open');
				
			}, 100);			
        }
	}	
	
    render() {
        return (
            <>
                <header className="site-header header-transparent mo-left" id="fix-header">
                    <div className="top-bar">
                        <div className="container">
                            <div className="row d-flex justify-content-between">
                                <div className="dlab-topbar-left">
                                    <ul>
                                        <li><i className="flaticon-phone-call m-r5"></i> +91 831 868 5043</li>
                                        <li><i className="ti-location-pin m-r5"></i> 137/B3, Spaze Itech Park, Sec-49, 122002, Gurgaon, Haryana, IN </li>
                                    </ul>
                                </div>
                                <div className="dlab-topbar-right">
                                    <ul>
                                        <li><i className="ti-skype m-r5"></i> softmasters4u</li>
                                        <li><i className="ti-email m-r5"></i> info@dileepchauhan.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-header main-bar-wraper navbar-expand-lg bg-orange" >
               
                    {/* <Wave fill='#f79902'
        paused={false}
        options={{
          height: 20,
          amplitude: 80,
          speed: 0.11,
          points: 5
        }}
    
   /> */}

                        <div className="main-bar clearfix ">
                 
                        <div className="clearfix" style={{height:4 ,top:110 }} >
                   <img src={svgImage} alt='Wave '  style={{height:155,width:'100%' }}></img>
                   </div>

                            <div className="container clearfix" >
                           
                                <div className="logo-header mostion" >
                                    
                                    <Link to={'./'} className="dez-page"><img src={logo} alt="Welcome" /></Link>
                                </div>

                                <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <Link to={'./contact'} className="dez-page site-button orange " style={{color:'black', top:30}}><h7>Inquire Now</h7> </Link>
                                    </div>
                                </div>

                                <div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
									<div className="logo-header mostion d-md-block d-lg-none ">
										<Link to={'./'} className="dez-page"><img src={logo} alt="" /></Link>
									</div>
									{/*  Header Menu Contents  */}
										<HeaderMenu />
                                      
									{/*  Header Menu Contents End */}
                                </div>
                            </div>
                        </div>
                    {/* <img src={svgImage2} alt='Wave '  style={{height:80,width:'100%' }}></img>  */}
                    </div>
                </header>
            </>
        )
    }
}

	
export default Header;