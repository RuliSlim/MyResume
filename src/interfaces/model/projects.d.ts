interface IProject {
	title: string
	desc: string
	images: string[]
	video: string
	roles: string[]
	stacks: string[]
	link?: string
}

type ProjectState = {
	project?: IProject
	projects: IProject[]
	loading: boolean
	isError: boolean
	message?: string
}

type Payload = IProject | IProject[] | string

type ProjectAction = {
	type: string
	payload?: Payload
}

type DispatchType = (args: ProjectAction) => ProjectAction