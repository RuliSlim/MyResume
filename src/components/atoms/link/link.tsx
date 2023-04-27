import React from "react";
import { MyText } from "../..";

const Link = (props: ILink): JSX.Element => {
	const { text, isActive, onClick } = props;

	return (
		<button className={`mx-auto rounded-full text-base md:text-xs py-0 md:py-2 px-5 ${isActive && "bg-gray-500"} border-gray-400 border-2`} disabled={text === "Bio" || text === "Contact"} onClick={onClick(text)}>
			<MyText text={text} type="link" weight="normal" />
		</button>
	);
};

export default Link;