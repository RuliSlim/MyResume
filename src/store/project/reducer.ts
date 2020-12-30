const initialState: ProjectState = {
	projects: [],
	isError: false,
	loading: false,
};

const reducer = (state: ProjectState = initialState, action: ProjectAction): ProjectState => {
	switch (action.type) {
	case ProjectActionType.LOADING:
		return { ...state, loading: true };
	case ProjectActionType.GET_ALL_SUCCESS:
		if (action.payload) {
			return { ...state, loading: false, projects: action.payload as IProject[] };
		}
		break;
	case ProjectActionType.GET_ONE_SUCCESS:
		if (action.payload) {
			return { ...state, loading: false, project: action.payload as IProject };
		}
		break;
	case ProjectActionType.FAIL:
		return { ...state, loading: false, isError: true, message: action.payload as string };
	}
	return initialState;
};

export { reducer as ProjectReducer };