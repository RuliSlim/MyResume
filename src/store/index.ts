import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./project/reducer";

export const RootReducers = combineReducers({
	project: reducer
});

export const store = createStore(RootReducers, applyMiddleware(thunk));