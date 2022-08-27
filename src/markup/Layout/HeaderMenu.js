import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Wave from 'react-wavify'
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'
import "./nav.css"
class HeaderMenu extends Component{
	render(){
		return(
			<>
			
		<div >

		
			<nav className="nav navbar-nav" > 
			
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
		  </div>
		  <div>
				<FloatingWhatsApp phone='918052055746'  accountName="Beamish_Tech"
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
        notificationSound />
		  </div>
		  </>
		)
	}
}
export default HeaderMenu;