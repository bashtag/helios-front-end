import * as actionTypes from "../actions/actionTypes"
import initialStates from "./initialStates";

export default function marketListReducer(state=initialStates.markets, action) {
	switch (action.type) {
		case actionTypes.GET_MARKETS_FROM_URL:
			return (action.payload);
	
		default:
			return (state);
	}
}