const DISPLAY = 'DISPLAY'
const TURN_ON = 'TURN_ON'
const BANK = 'BANK'

const modeReducer = (state, action) => {
	switch (action.type) {
		case TURN_ON: {
			return Object.assign({}, state, { power: action.power })
		}
		case BANK: {
			return Object.assign({}, state, { bank: action.bank, display: action.display, chosenBank: action.chosenBank })
		}
		case DISPLAY: {
			return Object.assign({}, state, { display: action.display })
		}
		default: {
			throw Error('Unknown action: ' + action.type)
		}
	}
}

export default modeReducer