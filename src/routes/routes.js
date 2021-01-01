import Home from '../pages/Home'
import Cart from '../pages/Cart'

let routes = [
	{
		name: 'Home',
		url: '/',
		component: Home,
		exact: true
	},
	{
		name: 'cart',
		url: '/cart',
		component: Cart,
		exact: true
	},
	{
		url: '**',
		component: Home
	}
];

let routesMap = {}


routes.forEach((route) => {
	if(route.hasOwnProperty('name')){
		routesMap[route.name] = route.url
	}
})


export default routes

export {routesMap}
