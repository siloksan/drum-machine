import './App.css';
import React, {useEffect} from "react";
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {buttonStyle} from "./bootstrapStyles";
import {pads} from "./pads";

const App = (props) => {

	const handleKeyDown = (event) => {
		const slap = document.getElementById(event.code.slice(-1))
		if (slap === null) return;
		slap.currentTime = 0
		slap.play()
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown,
			[])
	})

	return (
		<div id="drum-machine">
			<h1>Drum Machine</h1>
			<div id="display">Screen</div>
			<BlockPads/>
			<section id="drum-controller">
				<Form>
					<Form.Check // prettier-ignore
						type="switch"
						id="custom-switch"
						label="Check this switch"
					/>
					<Form.Check // prettier-ignore
						disabled
						type="switch"
						label="disabled switch"
						id="disabled-custom-switch"
					/>
				</Form>

			</section>

		</div>
	);
}

const BlockPads = (props) => {

	const padsList = pads.map((pad) => <Pad key={pad.name} pad={pad}/>)
	return (
		<section className="drum-pads">
			{padsList}
		</section>
	)

}

const Pad = (props) => {

	const handleClick = (event, additional_param) => {
		console.log(event);
		const slap = document.getElementById(additional_param)
		slap.currentTime = 0
		slap.play()

	}

	const pad = props.pad

	return (
		<Button key={pad.name}
		        variant="primary"
		        style={buttonStyle}
		        onClick={(e) => handleClick(e, pad.key)}>
			<audio id={pad.key} src={pad.src}></audio>
			{pad.key}</Button>
	)
}
export default App