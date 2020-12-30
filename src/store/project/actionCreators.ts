import { projectsDummy } from "../../interfaces/model/projects.dummy";
import { ProjectActionType } from "../../interfaces/model/store";

export const getAllProjects = (): (dispatch: DispatchType) => void => {
	const action: ProjectAction = {
		type: ProjectActionType.GET_ALL_SUCCESS
	};
	console.log("masuk sini ga siih?");
	return callApi(action);
};

export const getProject = (project: IProject): (dispatch: DispatchType) => void => {
	const action: ProjectAction = {
		type: ProjectActionType.GET_ONE_SUCCESS,
		payload: project
	};
	return callApi(action);
};

export const changeFocus = (which: "NEXT" | "PREV" | "ONCLICK", payload?: IProject): (dispatch: DispatchType) => void => (dispatch: DispatchType) => {
	let type = ProjectActionType.LOADING;

	if (which === "NEXT") {
		type = ProjectActionType.GET_NEXT_PROJECT;
	} else if (which === "PREV") {
		type = ProjectActionType.GET_PREV_PROJECT;
	} else {
		type = ProjectActionType.GET_PROJECT_FOCUS;
	}

	dispatch({
		type: type,
		payload
	});
};

export const callApi = (action: ProjectAction): (dispatch: DispatchType) => void => async (dispatch: DispatchType) => {
	try {
		// laoding fetching data
		dispatch({
			type: ProjectActionType.LOADING
		});

		if (action.payload) {
			dispatch({
				type: action.type,
				payload: action.payload
			});
			return;
		}

		// simulate fetching data
		setTimeout(() => {
			const res: IProject[] = projectsDummy;
			dispatch({
				type: action.type,
				payload: res
			});
		}, 3000);
	} catch (error) {
		dispatch({
			type: ProjectActionType.FAIL,
		});
	}
};