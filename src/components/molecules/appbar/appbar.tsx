import React from "react";
import { Connection, Hud, Social } from "../..";
import { MyImageProps } from "../../../interfaces/image";
import { MyTextProps } from "../../../interfaces/text";

const Appbar = (): JSX.Element => {
	const image: MyImageProps = {
		size: "m",
		source: "https://cdn.dribbble.com/users/391355/avatars/normal/d436f7d2501bfc9237f6212d34a9a36c.jpeg?1582630643",
		type: "avatar"
	};

	const text: MyTextProps = {
		text: "Ruli",
		type: "title",
		weight: "normal"
	};

	const icons: MyImageProps[] = [
		{
			size: "s",
			source: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
			type: "icon"
		},
		{
			size: "s",
			source: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
			type: "icon"
		},
		{
			size: "s",
			source: "https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png",
			type: "icon"
		},
		{
			size: "s",
			source: "https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png",
			type: "icon"
		},
		{
			size: "s",
			source: "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png",
			type: "icon"
		},
	];

	const social: string[] = [
		"info-circle",
		"comments",
		"trophy"
	];

	return (
		<div className="flex flex-row justify-start items-center">
			<div className="flex-1">
				<Hud image={image} text={text} icons={icons}/>
			</div>
			{/* <div className="flex-1">
				<Social icons={social}/>
			</div> */}
			<div className="">
				<Connection />
			</div>
		</div>
	);
};

export default Appbar;