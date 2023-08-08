import Pad from "./Pad";
import React from "react";

const BlockPads = (props) => {
	const { power, bank } = props.mode

	const padsList = bank.bankOfSounds.map((pad) => <Pad key={pad.name} pad={pad} power={power} />)
	return (
		<section className="drum-pads">
			{padsList}
		</section>
	)
}

export default BlockPads