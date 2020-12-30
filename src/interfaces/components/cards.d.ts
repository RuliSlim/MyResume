interface ICard {
	data: IProject;
	id: number;
	navigate: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}