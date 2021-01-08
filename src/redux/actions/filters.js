import {SET_CATEGORY, SET_SORT_BY} from '../types'

export function setCategory(index) {
	return ({type:SET_CATEGORY, payload: index})
}
export function setSortBy(type) {
	return({type:SET_SORT_BY, payload: type})
}
