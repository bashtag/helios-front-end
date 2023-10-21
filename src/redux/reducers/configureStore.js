import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export default function configureStore() {
	return (legacy_createStore(rootReducer, applyMiddleware(thunk)));
}