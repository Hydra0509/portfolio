import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { SiAboutDotMe } from 'react-icons/si';
import { MdGraphicEq } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function NavBar() {
	return (
		<div className = "navbar">
		<ul>
		<Link activeClass="active" to="headertop" spy={true} smooth={true}>
			<li>
				<a href="#">
					<span className="icon"><AiFillHome /></span>
					<span className="title">Home</span>
				</a>
			</li>
			</Link>
			<li>
				<a href="#">
					<span className="icon"><SiAboutDotMe /></span>
					<span className="title">About me</span>
				</a>
			</li>
			<Link activeClass="active" to="loremtext" spy={true} smooth={true}>
			<li>
				<a href="#">
					<span className="icon"><MdGraphicEq /></span>
					<span className="title">My work</span>
				</a>
			</li>
			</Link>
			<Link activeClass="active" to="footer" spy={true} smooth={true}>
			<li>
				<a href="#">
					<span className="icon"><HiOutlineMail /></span>
					<span className="title">Contact</span>
				</a>
			</li>
			</Link>
		</ul>
		</div>
		)
}