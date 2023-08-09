import React from 'react';
import Form from "react-bootstrap/Form";
import {rangeStyles, rangeTextStyles} from "../styles/bootstrapStyles";

const Volume = ({ changeVolume }) => {
	return (
		<section className="volume">
			<Form.Label style={rangeTextStyles}>Volume</Form.Label>
			<Form.Range style={rangeStyles} min='0' max='1' step='0.01' onChange={changeVolume}/>
		</section>
	);
};

export default Volume;