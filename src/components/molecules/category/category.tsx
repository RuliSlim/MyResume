import React from "react";
import { Link } from "../..";

const Category = (): JSX.Element => {

	const links: string[] = [
		"Store",
		"My games",
		"Media",
		"Library",
		"Settings"
	];

	return (
		<div className="flex flex-row items-center justify-between w-1/10 md:w-1/2">
			<i className="fas fa-chevron-left flex-1"></i>
			<div className="flex flex-row items-center w-full">
				{links.map((el, key) => (
					<div className="flex-1 text-center" key={el + "-" + key}>
						<Link text={el} isActive={el === "My games"} />
					</div>
				))}
			</div>
			<i className="fas fa-chevron-right float-right flex-1"></i>
		</div>
	);
};

export default Category;