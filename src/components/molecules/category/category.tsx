/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { Link } from "../..";
//@ts-ignore
import { AnimateOnChange } from "react-animation";

const Category = (): JSX.Element => {
	const [ links, setLinks ] = React.useState<ICategoryState[]>([
		{
			title: "Bio",
			isActive: false,
		},
		{
			title: "Project",
			isActive: true
		},
		{
			title: "Contact",
			isActive: false
		}
	]);

	const onClick = (link: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		const idx = links.findIndex(el => el.title === link);
		setLinks((prev) => {
			const newArr = prev.slice();
			newArr.forEach((el) => el.isActive = false);
			newArr[idx].isActive = true;
			return newArr;
		});
	};

	return (
		<div className="flex flex-row items-center justify-between w-1/10 md:w-1/3">
			<i className="fas fa-chevron-left flex-1"></i>
			<div className="flex flex-row items-center w-full">
				{links.map((el, key) => (
					<div className="flex-1 text-center" key={el + "-" + key}>
						<AnimateOnChange
							animationIn="bounceIn"
							animationOut="bounceOut"
							duration={1000}
						>
							<Link text={el.title} isActive={el.isActive} onClick={onClick} />
						</AnimateOnChange>
					</div>
				))}
			</div>
			<i className="fas fa-chevron-right float-right flex-1"></i>
		</div>
	);
};

export default Category;