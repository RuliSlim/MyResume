/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { Link } from "../..";
//@ts-ignore
import { AnimateOnChange } from "react-animation";

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
						<AnimateOnChange
							animationIn="bounceIn"
							animationOut="bounceOut"
							duration={1000}
						>
							<Link text={el} isActive={el === "My games"} />
						</AnimateOnChange>
					</div>
				))}
			</div>
			<i className="fas fa-chevron-right float-right flex-1"></i>
		</div>
	);
};

export default Category;