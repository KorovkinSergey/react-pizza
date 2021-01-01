import React from 'react'
import {Header} from './components'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import routes from './routes/routes'


function App() {

	const routesComponents = routes.map((route) => {
		return <Route path={route.url}
									component={route.component}
									exact={route.exact}
									key={route.url}/>

	})

	return (
		<div className="wrapper">
			<BrowserRouter>
				<Header/>
				<div className="content">
					<Switch>
						{routesComponents}
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
