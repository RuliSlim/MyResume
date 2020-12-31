import React from "react";
import { Social } from "../..";
import { MyImageProps } from "../../../interfaces/image";
import { MyTextProps } from "../../../interfaces/text";

// const Appbar = React.lazy(() => import("../../components/molecules/appbar/appbar"));

const Connection = React.lazy(() => import("../connection/connection"));
const Hud = React.lazy(() => import("../hud/hud"));

const Appbar = (): JSX.Element => {
	const image: MyImageProps = {
		size: "m",
		source: "https://scontent-cgk1-2.xx.fbcdn.net/v/t31.0-8/1052791_289584651186999_1046406688_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeF_6SqgRFPQp21CDGd0FzDyzK6t1QAXDIPMrq3VABcMgxgLucRn2tcyuK-tYTsV9lUwHhLlkHQOtokpv76Ge0t2&_nc_ohc=RwzrNGT9jGIAX_LHI7a&_nc_ht=scontent-cgk1-2.xx&oh=76a8a8bf2aabf4da9736ae20fc3e8673&oe=601298F7",
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