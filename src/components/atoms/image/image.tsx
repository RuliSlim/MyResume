import React from "react";
import { MyImageProps } from "../../../interfaces/image";

const MyImage = (props: MyImageProps): JSX.Element => {
	const { source, type, size } = props;
	const [ className, setClassName ] = React.useState<string>("");

	const createClassName = (): void => {
		let name = "";
		if (type === "avatar") {
			name = "rounded-full h-10 w-10 md:w-16 md:h-16 flex items-center justify-center";
		} else if (type === "icon") {
			name = "h-6 w-6 md:h-10 md:w-10 flex items-center justify-center";
		} else {
			name = "rounded-3xl object-cover hover:object-contain h-card w-80 max-w-none transition duration-500 ease-in-out transform hover:translate-x-80 hover:scale-200 hover:z-10";
		}

		switch (size) {
		case "s":
			name += " transform scale-50";
			break;
		case "m":
			name += " transform scale-75";
			break;
		case "l":
			name += " transform scale-100";
			break;
		case "xl":
			name += " transform scale-150";
			break;
		}

		setClassName(name);
	};

	React.useEffect(() => {
		createClassName();
	}, []);

	return (
		<img src={source} className={className}/>
	);
};

export default MyImage;