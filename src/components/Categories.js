import React from 'react'
import PropTypes from 'prop-types'
import {setCategory} from '../redux/actions/filters'
import {connect} from 'react-redux'

const Categories = React.memo(({ categoryNames , activeCategory, setCategory }) => {

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => setCategory(null)}>
          Все
        </li>
        {categoryNames &&
        categoryNames.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => setCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Categories.defaultProps = { activeCategory: null, items: [] }

const mapStateToProps = state => {
  return {
    categoryNames :state.filters.categoryNames,
    activeCategory :state.filters.category,
  }
}

const dispatchToProps = dispatch => {
  return {
    setCategory: index => dispatch (setCategory(index)),
  }
}

export default connect(mapStateToProps, dispatchToProps)(Categories)
