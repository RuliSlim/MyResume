import React from "react";
import { MyTextProps } from "../../../interfaces/text";

const MyText = (props: MyTextProps): JSX.Element => {
	const { text, type, weight } = props;
	const [ className, setClassName ] = React.useState<string>("");

	const getClass = (): void => {
		let name = "";

		switch(type) {
		case "caption":
			name += "text-sm";
			break;
		case "title":
			name += "text-2xl";
			break;
		case "normal":
			name += "text-xs sm:text-base";
			break;
		case "link":
			name += "text-xxs sm:text-base";
			break;
		}

		switch(weight) {
		case "normal":
			name += " font-medium";
			break;
		case "bold":
			name += " font-bold";
			break;
		case "bolder":
			name += " font-black";
			break;
		case "light":
			name += " font-light";
			break;
		case "lighter":
			name += " font-thin";
			break;
		}

		setClassName(name);
	};

	React.useEffect(() => {
		getClass();
	}, []);

	return (
		<p className={className}>{text}</p>
	);
};

export default MyText;