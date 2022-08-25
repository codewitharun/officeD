import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'
import "./nav.css"
class HeaderMenu extends Component{
	render(){
		return(
			// <>
			// 	<ul className="nav navbar-nav">
			// 		<li className="active"><Link to={'/'}><span className="ti-home"></span> <i className="fa"></i></Link>
						
			// 		</li>
			// 		<li><Link to={'./about'}>About Us <i className="fa"></i></Link>
						
			// 		</li>
			// 		<li><Link to={'./services'}>Our Service <i className="fa"></i></Link>
						
			// 		</li>
					
			// 		<li><Link to={'./portfolio'}>Our Portfolio <i className="fa"></i></Link>
						
			// 		</li>
					
					
			// 	</ul>
			// </>
			<nav className="nav navbar-nav">
				<FloatingWhatsApp phone='918052055746' />
			<NavLink
			  exact
			  activeClassName="navbar__link--active"
			  className="navbar__link"
			  to="/"
			>
			  Home
			</NavLink>
			<NavLink
			  activeClassName="navbar__link--active"
			  className="navbar__link"
			  to="./about"
			>
			 About
			</NavLink>
			<NavLink
			  activeClassName="navbar__link--active"
			  className="navbar__link"
			  to="./services"
			>
			 Our Service
			</NavLink>
			<NavLink
			  activeClassName="navbar__link--active"
			  className="navbar__link"
			  to="./portfolio"
			>
			  Portfolio
			</NavLink>
		  </nav>
		)
	}
}
export default HeaderMenu;