import React from "react";
import { MyText } from "../..";

interface LinkProps {
	text: string;
	isActive: boolean;
}

const Link = (props: LinkProps): JSX.Element => {
	const { text, isActive } = props;

	return (
		<div className={`mx-auto rounded-full py-1 px-2 ${isActive && "bg-gray-100"}`}>
			<MyText text={text} type="link" weight="normal" />
		</div>
	);
};

export default Link;