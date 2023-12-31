import React, { useEffect, useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/App.css';
import BlockPads from "./component/BlockPads";
import DrumController from "./component/DrumController";
import {heaterKit, SmoothPianoKit} from "./utils/bankOfSounds";
import modeReducer from "./reducer/reducer";
import Volume from "./component/Volume";

const initialMode = {
	power: false,
	bank: heaterKit,
	display: 'Screen',
	chosenBank: true,
	volume: 0.5
}

const App = () => {

	const [mode, dispatch] = useReducer(modeReducer, initialMode)
	const power = mode.power

	const handleKeyDown = (event) => {
		const slap = document.getElementById(event.code.slice(-1))
		if (slap === null) return;
		slap.parentElement.click()
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

	const changeVolume = (ev) => {
		dispatch({
			type: 'VOLUME',
			volume: ev.target.value,
			display: Math.floor(ev.target.value * 100)
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
			<Volume changeVolume={changeVolume}/>
		</div>
	);
}

export default App