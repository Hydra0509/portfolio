import React from 'react'
import background from './images/headerimage.png'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Header() {



return (
	<header className="headertop" id = "bg"style = {{ backgroundImage: `url(${background})` }}>
	<h1>This WILL be the portfolio page!</h1>
	<p className= "p"> this will be the header</p>
	</header>
	)
}