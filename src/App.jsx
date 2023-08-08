import React, { useEffect, useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/App.css';
import BlockPads from "./component/BlockPads";
import DrumController from "./component/DrumController";
import {heaterKit, SmoothPianoKit} from "./utils/bankOfSounds";
import modeReducer from "./reducer/reducer";
import Form from 'react-bootstrap/Form';
import {rangeStyles, rangeTextStyles} from "./styles/bootstrapStyles";

const initialMode = { power: false, bank: heaterKit, display: 'Screen', chosenBank: true}

const App = () => {

	const [mode, dispatch] = useReducer(modeReducer, initialMode)
	const power = mode.power

	const handleKeyDown = (event) => {
		const slap = document.getElementById(event.code.slice(-1))
		if (slap === null) return;
		slap.currentTime = 0
		slap.play()
		slap.parentElement.style.background = 'linear-gradient(90deg, #ffc107, #a91919)'
		setTimeout(() => {
			slap.parentElement.style.background = 'linear-gradient(90deg, #a91919, #ffc107)'
		}, 100)
		renderDisplay(slap.parentElement.id)
	}

	const renderDisplay = (text) => {
		dispatch({
			type: 'DISPLAY',
			display: text
		})
	}

	const changeBank = (boolean) => {
		if (!power) return
		console.log(boolean);
		if (boolean) {
			dispatch({
				type: 'BANK',
				bank: heaterKit,
				display: heaterKit.title,
				chosenBank: boolean
			})
		} else {
			dispatch({
				type: 'BANK',
				bank: SmoothPianoKit,
				display: SmoothPianoKit.title,
				chosenBank: boolean
			})
		}
	}

	const turnOnOrOff = (boolean) => {
		dispatch({
			type: 'TURN_ON',
			power: boolean
		})
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown,
		)
	}, [])

	return (
		<div id="drum-machine">
			<h1 className="title">Drum Machine</h1>
			<DrumController
				power={power}
				turnOnOrOff={turnOnOrOff}
				display={mode.display}
				changeBank={changeBank}
				chosenBank={mode.chosenBank}
			/>
			<BlockPads mode={mode} renderDisplay={renderDisplay}/>
			<div className="volume">
				<Form.Label style={rangeTextStyles}>Volume</Form.Label>
				<Form.Range style={rangeStyles}/>
			</div>
		</div>
	);
}

export default App