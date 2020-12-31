import { ProjectActionType } from "../../interfaces/model/store";

const initialState: ProjectState = {
	projects: [],
	isError: false,
	loading: true,
};

export const reducer = (state: ProjectState = initialState, action: ProjectAction): ProjectState => {
	switch (action.type) {
	case ProjectActionType.LOADING:
		return { ...state, loading: true };
	case ProjectActionType.GET_ALL_SUCCESS:
		if (action.payload) {
			return { ...state, loading: false, projects: action.payload as IProject[] };
		}
		break;
	case ProjectActionType.GET_NEXT_PROJECT: {
		const newArr = state.projects.filter((_el, i) => i !== 0);
		newArr.push(state.projects[0]);
		return { ...state, projects: newArr };
	}
	case ProjectActionType.GET_PREV_PROJECT: {
		const newArr = state.projects.filter((_el, i, arr) => i !== (arr.length - 1));
		newArr.unshift(state.projects[(state.projects.length - 1)]);
		return { ...state, projects: newArr };
	}
	case ProjectActionType.GET_PROJECT_FOCUS: {
		if (action.payload) {
			const newArr = state.projects.filter((el) => el.title !== (action.payload as IProject).title);
			newArr.splice(1, 0, (action.payload as IProject) );
			return { ...state, projects: newArr };
		}
		break;
	}
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
