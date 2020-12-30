import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ProjectReducer } from "./project/reducer";

export const RootReducers = combineReducers({
	project: ProjectReducer
});

export const store = createStore(RootReducers, applyMiddleware(thunk));