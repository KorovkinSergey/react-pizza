import React from 'react'
import classNames from 'classnames'
import Button from '../Button'
import {connect} from 'react-redux'
import {onClickAddPizza, plusCartItem} from '../../redux/actions/cart'


function PizzaBlock(props) {

	const availableTypes = ['тонкое', 'традиционное']
	const availableSizes = [26, 30, 40]
	const [activeType, setActiveType] = React.useState(props.params.types[0])
	const [activeSize, setActiveSize] = React.useState(0)

	const addedCount = props.cartItems.reduce((total, item) => (
		item.params.id === props.params.id ? total + item.count : total
	), 0)

	const onAddPizza = () => {
		const obj = {
			params: {
				id: props.params.id,
				name: props.params.name,
				imageUrl: props.params.imageUrl,
				price: props.params.price,
				size: availableSizes[activeSize],
				type: availableTypes[activeType],
			},
			count: 1,
		}
		if (props.cartItems.find(item => JSON.stringify(item.params) === JSON.stringify(obj.params))) {
			props.plusCartItem(obj)
		} else {
			props.onClickAddPizza(obj)
		}
	}

	return (
		<div className="pizza-block">
			<img className="pizza-block__image" src={props.params.imageUrl} alt="Pizza"/>
			<h4 className="pizza-block__title">{props.params.name}</h4>
			<div className="pizza-block__selector">
				<ul>
					{availableTypes.map((type, index) => (
						<li
							key={type}
							onClick={() => setActiveType(index)}
							className={classNames({
								active: activeType === index,
								disabled: !props.params.types.includes(index),
							})}>
							{type}
						</li>
					))}
				</ul>
				<ul>
					{availableSizes.map((size, index) => (
						<li
							key={size}
							onClick={() => setActiveSize(index)}
							className={classNames({
								active: activeSize === index,
								disabled: !props.params.sizes.includes(size),
							})}>
							{size} см.
						</li>
					))}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {props.params.price} ₽</div>
				<Button onClick={onAddPizza} className="button--add" outline>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					{addedCount
						? <i>{addedCount}</i>
						: null
					}
				</Button>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		cartItems: state.cart.items
	}
}

const dispatchToProps = dispatch => {
	return {
		onClickAddPizza: obj => dispatch(onClickAddPizza(obj)),
		plusCartItem: id => dispatch(plusCartItem(id))
	}
}


export default connect(mapStateToProps, dispatchToProps)(PizzaBlock)
