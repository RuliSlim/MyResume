interface IProject {
	title: string
	desc: string
	images: string[]
	video: string
	roles: string
	stacks: string[]
}

type ProjectState = {
	project?: IProject
	projects: IProject[]
	loading: boolean
	isError: boolean
	message?: string
}

enum ProjectActionType {
	LOADING = "get_all",
	FAIL = "fail",
	GET_ALL_SUCCESS = "success",
	GET_ONE_SUCCESS = "success_one"
}

type Payload = IProject | IProject[] | string

type ProjectAction = {
	type: string
	payload?: Payload
}

type DispatchType = (args: ProjectAction) => ProjectAction