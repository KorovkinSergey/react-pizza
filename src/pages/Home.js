import React from 'react'
import {connect} from 'react-redux'
import {Categories, SortPopup, PizzaBlock, } from '../components'


function Home() {

	return (
		<div className="container">

			<div className="content__top">
				<Categories />
				<SortPopup  />
			</div>

			<h2 className="content__title">Все пиццы</h2>

			<div className="content__items">
				<PizzaBlock />

			</div>

		</div>
	)
}


const mapStateToProps = state => {
	return {

	}
}

const dispatchToProps = dispatch => {
	return {

	}
}

export default connect(mapStateToProps, dispatchToProps)(Home)
