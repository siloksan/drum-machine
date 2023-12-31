import React from 'react';
import {Form} from "react-bootstrap";

const DrumController = ({ display, changeBank, turnOnOrOff, power, chosenBank }) => {

	const handleCheckbox = () => {
		changeBank(!chosenBank)
	}

	const powerOnOrOf = () => {
		turnOnOrOff(!power)
	}

	return (
		<section id="drum-controller">
			<div className="block-power">
				<input className="power" type="checkbox" onClick={powerOnOrOf}/>
			</div>
			<div id="display">{display}</div>
			<Form className='controller'>
				<Form.Check // prettier-ignore
					type="switch"
					id="custom-switch"
					size="lg"
					onClick={handleCheckbox}
				/>
				<p>BANK</p>
			</Form>
		</section>
	);
};

export default DrumController;