import {ADD_ITEMS_FETCH, IS_FETCH_LOADED} from '../types'

const initialState = {
	items: [],
	isLoaded: true,
}

const pizzas = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEMS_FETCH:
			return {...state, items: action.payload}
		case IS_FETCH_LOADED:
			return {...state, isLoaded: false}
		default:
			return state
	}
}

export default pizzas
