import { projectsDummy } from "../../interfaces/model/projects.dummy";

export const getAllProjects = (): (dispatch: DispatchType) => void => {
	const action: ProjectAction = {
		type: ProjectActionType.GET_ALL_SUCCESS
	};
	return callApi(action);
};

export const getProject = (project: IProject): (dispatch: DispatchType) => void => {
	const action: ProjectAction = {
		type: ProjectActionType.GET_ONE_SUCCESS,
		payload: project
	};
	return callApi(action);
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