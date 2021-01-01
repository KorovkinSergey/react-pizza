const initialState = {

  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },

  sortItems: [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавит', type: 'name', order: 'asc'},
  ],

  categoryNames: ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
}

const filters = (state = initialState, action) => {
  return state
}


export default filters
