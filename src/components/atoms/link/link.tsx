import React from "react";
import { MyText } from "../..";

interface LinkProps {
	text: string;
	isActive: boolean;
}

const Link = (props: LinkProps): JSX.Element => {
	const { text } = props;

	return (
		<div className="mx-auto bg-gray-100 rounded-full py-1 px-2">
			<MyText text={text} type="link" weight="normal" />
		</div>
	);
};

export default Link;