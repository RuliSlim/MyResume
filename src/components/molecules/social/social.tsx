import React from "react";

interface SocialProps {
	icons: string[];
}

const Social = (props: SocialProps): JSX.Element => {
	const { icons } = props;
	return (
		<div className="flex flex-row items-start space-x-4 h-auto w-auto">
			{ icons.map((el, key) => (
				<i className={`fas fa-${el}`} key={el + "-" + key}></i>
			))}
		</div>
	);
};

export default Social;