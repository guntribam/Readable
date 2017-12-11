const initialState = {
	categories: [
		{
			name: 'react',
			path: 'react'
		},
		{
			name: 'redux',
			path: 'redux'
		},
		{
			name: 'udacity',
			path: 'udacity'
		}
	]
}

function categoriesReducer(state = initialState, action){
	switch (action.type){
		default:
			return state;
	}
}

export default categoriesReducer;