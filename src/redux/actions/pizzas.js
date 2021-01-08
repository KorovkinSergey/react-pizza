import {ADD_ITEMS_FETCH, IS_FETCH_LOADED} from '../types'

const BasePizza = 'https://react-pizza-93d7b-default-rtdb.europe-west1.firebasedatabase.app/-MQO7AJ91Dj3uLqfd6Ji/pizzas.json'

export function fetchBasePizza () {
	return async dispatch => {
		const result = await fetch(BasePizza).then(res => res.json())
		dispatch({type: ADD_ITEMS_FETCH, payload: result })
		dispatch({type: IS_FETCH_LOADED})
	}
}
