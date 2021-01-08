import {CLEAR_CART, MINUS_CART_ITEM, ON_CLICK_ADD_PIZZA, PLUS_CART_ITEM, REMOVE_CART_ITEM} from '../types'

export function onClickAddPizza (item) {
	return ({type: ON_CLICK_ADD_PIZZA, payload: item})
}

export function removeCartItem (item) {
	return ({type: REMOVE_CART_ITEM, payload: item})
}

export function plusCartItem (item) {
	return ({type: PLUS_CART_ITEM, payload: item})
}

export function minusCartItem (item) {
	return ({type: MINUS_CART_ITEM, payload: item})
}

export function clearCart() {
	return({type: CLEAR_CART})
}
