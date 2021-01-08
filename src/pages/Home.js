import React from 'react'
import {connect} from 'react-redux'
import {Categories, SortPopup, PizzaBlock,} from '../components'
import LoadingBlock from '../components/PizzaBlock/LoadingBlock'

function Home({isLoaded, items, category, sortBy}) {

	const [sortItems, setSortItems] = React.useState(items)

	React.useEffect(() => {
		let sort = items
		if (category !== null) {
			sort = items.filter(item => item.category.indexOf(category) !== -1)
		}
		sort = [...sort].sort((a, b) => a[sortBy] - b[sortBy])

		setSortItems(sort)

	}, [category, sortBy, items])


	return (
		<div className="container">
			<div className="content__top">
				<Categories/>
				<SortPopup/>
			</div>

			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoaded
						? <React.Fragment>
							<LoadingBlock/>
							<LoadingBlock/>
							<LoadingBlock/>
							<LoadingBlock/>
						</React.Fragment>

						: sortItems.map(item =>
							<PizzaBlock key={item.id} params={item}/>
						)
				}
			</div>
		</div>
	)
}


const mapStateToProps = state => {
	return {
		isLoaded: state.pizzas.isLoaded,
		items: state.pizzas.items,
		category: state.filters.category,
		sortBy: state.filters.sortBy
	}
}

export default connect(mapStateToProps, null)(Home)
