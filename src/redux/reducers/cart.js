import {CLEAR_CART, MINUS_CART_ITEM, ON_CLICK_ADD_PIZZA, PLUS_CART_ITEM, REMOVE_CART_ITEM} from '../types'

const initialState = {
	items: [],
	totalPrice: 0,
	totalCount: 0,
}

const getTotalPrice = items => items.reduce((sum, item) => item.params.price * item.count + sum, 0)
const getTotalCount = items => items.reduce((sum, item) => item.count + sum, 0)

const cart = (state = initialState, action) => {

	let items, totalPrice, totalCount

	switch (action.type) {

		case ON_CLICK_ADD_PIZZA:
			items = [...state.items, action.payload]
			totalPrice = getTotalPrice(items)
			totalCount = getTotalCount(items)

			return {...state, items, totalPrice, totalCount}

		case PLUS_CART_ITEM:
			items = state.items.map(item => {
				if (JSON.stringify(item.params) === JSON.stringify(action.payload.params)) {
					item.count += 1
					return item
				}
				return item
			})
			totalPrice = getTotalPrice(items)
			totalCount = getTotalCount(items)

			return {...state, items, totalPrice, totalCount}

		case MINUS_CART_ITEM:
			items = state.items.map(item => {
				if (JSON.stringify(item.params) === JSON.stringify(action.payload.params) && item.count > 1) {
					item.count -= 1
					return item
				}
				return item
			})
			totalPrice = getTotalPrice(items)
			totalCount = getTotalCount(items)

			return {...state, items, totalPrice, totalCount}

		case REMOVE_CART_ITEM:

			items = state.items.filter(i => JSON.stringify(i.params) !== JSON.stringify(action.payload.params))
			totalPrice = getTotalPrice(items)
			totalCount = getTotalCount(items)
			return {...state, items, totalPrice, totalCount}

		case CLEAR_CART:
			return {totalPrice: 0, totalCount: 0, items: []}
		default:
			return state
	}
}

export default cart
