import React from "react";
import { MyText } from "../..";

const Link = (props: ILink): JSX.Element => {
	const { text, isActive, onClick } = props;

	return (
		<button className={`mx-auto rounded-full py-2 px-5 ${isActive && "bg-gray-500"}`} onClick={onClick(text)}>
			<MyText text={text} type="link" weight="normal" />
		</button>
	);
};

export default Link;