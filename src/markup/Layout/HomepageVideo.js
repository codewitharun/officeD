import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/logo.png';
import logo2 from './../../images/logo-black.png';
import HeaderMenu from './HeaderMenu';
import video from "../../images/video/DummyVideo.mp4"
class onplayVideo extends Component {
	
    render() {
        return (
            <>
             <video autoPlay src={video} width="750" height="500" controls> </video>
            </>
        )
    }
}
export default onplayVideo;