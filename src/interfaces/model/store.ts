import { RootReducers } from "../../store";

export type RootStore = ReturnType<typeof RootReducers>

export enum ProjectActionType {
	LOADING = "get_all",
	FAIL = "fail",
	GET_ALL_SUCCESS = "success",
	GET_ONE_SUCCESS = "success_one",
	GET_NEXT_PROJECT = "next_project",
	GET_PREV_PROJECT = "prev_project",
	GET_PROJECT_FOCUS = "project_focus"
}