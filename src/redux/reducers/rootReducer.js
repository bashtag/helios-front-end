import { combineReducers } from "redux";
import marketListReducer from './marketListReducer';
import changeMarketReducer from './changeMarketReducer';

const rootReducer = combineReducers(
	{
		changeMarketReducer,
		marketListReducer
	}
);

export default rootReducer;