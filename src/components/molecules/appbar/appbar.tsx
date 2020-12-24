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
		text: "totalslim",
		type: "normal",
		weight: "normal"
	};

	const icons: MyImageProps[] = [
		{
			size: "s",
			source: "https://www.clipartmax.com/png/middle/233-2336080_ps4-june-refresh-playstation-plus-logo-01-us-ps-plus-icon-png.png",
			type: "icon"
		},
		{
			size: "s",
			source: "https://gmedia.playstation.com/is/image/SIEPDC/ps-now-blue-icon-icon-01-22sep20?$native--t$",
			type: "icon"
		}
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
			<div className="flex-1">
				<Social icons={social}/>
			</div>
			<div className="flex-1">
				<Connection />
			</div>
		</div>
	);
};

export default Appbar;