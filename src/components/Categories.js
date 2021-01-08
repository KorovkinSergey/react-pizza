import React from 'react'
import {setCategory} from '../redux/actions/filters'
import {connect} from 'react-redux'

function Categories(props) {

	return (
		<div className="categories">
			<ul>
				<li
					className={props.activeCategory === null ? 'active' : ''}
					onClick={() => props.setCategory(null)}>
					Все
				</li>
				{props.categoryNames &&
				props.categoryNames.map((name, index) => (
					<li
						className={props.activeCategory === index ? 'active' : ''}
						onClick={() => props.setCategory(index)}
						key={`${name}_${index}`}>
						{name}
					</li>
				))}
			</ul>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		categoryNames: state.filters.categoryNames,
		activeCategory: state.filters.category,
	}
}

const dispatchToProps = dispatch => {
	return {
		setCategory: index => dispatch(setCategory(index)),
	}
}

export default connect(mapStateToProps, dispatchToProps)(Categories)
