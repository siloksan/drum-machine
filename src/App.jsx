import React, { useEffect, useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/App.css';
import BlockPads from "./component/BlockPads";
import DrumController from "./component/DrumController";
import {heaterKit, SmoothPianoKit} from "./utils/bankOfSounds";
import modeReducer from "./reducer/reducer";

const initialMode = { power: true, bank: heaterKit, display: 'Screen'}

const App = () => {

	const [mode, dispatch] = useReducer(modeReducer, initialMode)
	const power = mode.power

	const handleKeyDown = (event) => {
		if (!power) return;
		const slap = document.getElementById(event.code.slice(-1))
		if (slap === null) return;
		slap.currentTime = 0
		slap.play()
		slap.parentElement.style.background = 'linear-gradient(90deg, #ffc107, #a91919)'
		setTimeout(() => {
			slap.parentElement.style.background = 'linear-gradient(90deg, #a91919, #ffc107)'
		}, 100)
	}

	const changeBank = (boolean) => {
		if (!power) return
		if (boolean) {
			dispatch({
				type: 'BANK',
				bank: heaterKit,
				display: heaterKit.title
			})
		} else {
			dispatch({
				type: 'BANK',
				bank: SmoothPianoKit,
				display: SmoothPianoKit.title
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
	}, [mode, handleKeyDown])

	return (
		<div id="drum-machine">
			<h1 className="title">Drum Machine</h1>
			<DrumController
				power={power}
				turnOnOrOff={turnOnOrOff}
				display={mode.display}
				changeBank={changeBank}
			/>
			<BlockPads mode={mode} />
		</div>
	);
}

export default App