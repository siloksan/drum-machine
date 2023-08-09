import Pad from "./Pad";
import React from "react";

const BlockPads = (props) => {
	const { power, bank, volume } = props.mode

	const padsList = bank.bankOfSounds.map((pad) => <Pad key={pad.name} pad={pad} power={power} renderDisplay={props.renderDisplay} volume={volume}/>)
	return (
		<section className="drum-pads">
			{padsList}
		</section>
	)
}

export default BlockPads