import React from "react";
import { MyImage, MyText } from "../..";
import { MyImageProps } from "../../../interfaces/image";
import { MyTextProps } from "../../../interfaces/text";

interface ImageTextProps {
	image: MyImageProps;
	text: MyTextProps;
	icons: MyImageProps[];
}

const Hud = (props: ImageTextProps): JSX.Element => {
	const { image, text, icons } = props;
	return (
		<div className="flex flex-row items-center justify-start">
			<MyImage source={image.source} type={image.type} size={image.size}/>
			<div className="flex flex-col items-start">
				<MyText text={text.text} type={text.type} weight={text.weight}/>
				<div className="flex flex-row items-center">
					{icons.map((el, key) => (
						<MyImage source={el.source} type={el.type} size={el.size} key={key + "-" + el.source}/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hud;