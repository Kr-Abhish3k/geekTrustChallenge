const initialState = { data: [], cart: [] };
import { ADD_TO_CART, STORE_DATA } from './actionTypes';
export default function productReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART:
			return state;
		case STORE_DATA: {
			const { data } = action;
			return {
				...state,
				data,
			};
		}
		default:
			return state;
	}
}
