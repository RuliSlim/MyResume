import React from "react";
import { MyImageProps } from "../../../interfaces/image";

const MyImage = (props: MyImageProps): JSX.Element => {
	const { source, type, size, id } = props;
	const [ className, setClassName ] = React.useState<string>("");

	const createClassName = (): void => {
		let name = "";
		if (type === "avatar") {
			name = "rounded-full h-10 w-10 md:w-16 md:h-16 flex items-center justify-center";
		} else if (type === "icon") {
			name = "h-4 w-4 md:h-8 md:w-8 flex items-center justify-center";
		} else {
			name = "rounded-3xl object-fill h-64 w-48 md:h-card md:w-64 max-w-none";
			if (id && id === 1) {
				name += "h-80 w-56 md:h-card md:w-80 max-w-none";
			}
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
	}, [ id ]);

	return (
		<img src={source} className={className}/>
	);
};

export default MyImage;