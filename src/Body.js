import React from 'react'
import Skull from './images/pictureskull.jpg'


export default function body() {
	return (
		<body>
		<div className="bodyContainer">
		<p className="aboutme">About me</p>
		<h2>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sem consectetur, bibendum massa sodales, luctus turpis. Donec molestie eros bibendum tortor imperdiet imperdiet. Morbi non tincidunt mi. Cras at feugiat risus. Nam non metus dignissim, elementum purus dictum, vulputate dolor. Duis massa sapien, congue a semper at, luctus non augue. Mauris tincidunt ante vitae justo suscipit, quis commodo nunc accumsan. Cras vitae congue massa. Fusce vel interdum neque. Suspendisse potenti. Morbi id auctor erat. Vivamus hendrerit sit amet lorem ut convallis.

In at libero elit. Ut posuere nunc vel suscipit egestas. 
		<img className="skullimage" src={Skull} alt="skull" width="800px" height="500px"/>
		</h2>
		</div>
		</body>
				)
}