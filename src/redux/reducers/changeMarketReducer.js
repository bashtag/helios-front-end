import * as actionTypes from "../actions/actionTypes"
import initialStates from "./initialStates";

export default function changeMarketReducer(state=initialStates.currentMarket, action) {
	switch (action.type) {
		case actionTypes.CHANGE_MARKET:
			return (action.payload);

		default:
			return (state);
	}
}