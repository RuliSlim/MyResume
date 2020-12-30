interface ILink {
	text: string;
	isActive: boolean;
	onClick: (link: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface ICategoryState {
	title: string;
	isActive: boolean;
}