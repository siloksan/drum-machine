import Button from "react-bootstrap/Button";
import '../styles/css/App.css';
import {buttonStyle} from "../styles/bootstrapStyles";
import React from "react";

const Pad = ({power, pad}) => {

	const handleClick = (event, additional_param) => {
		if (!power) return
		console.log(event.target);
		const slap = document.getElementById(additional_param)
		slap.currentTime = 0
		slap.play()
		event.target.style.background = 'linear-gradient(90deg, #ffc107, #a91919)'
		setTimeout(() => {
			event.target.style.background = 'linear-gradient(90deg, #a91919, #ffc107)'
		}, 100)
	}

	return (
		<Button style={buttonStyle}
		        className="pad"
		        key={pad.name}
		        variant="primary"
		        onClick={(e) => handleClick(e, pad.key)}>
			<audio id={pad.key} src={pad.src}></audio>
			{pad.key}</Button>
	)
}

export default Pad