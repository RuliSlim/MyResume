import React from "react";

const Loading = (): JSX.Element => {
	return (
		<div className="relative h-screen w-screen ">
			<img className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4" src={process.env.PUBLIC_URL + "assets/loading.gif"} />
		</div>
	);
};

export default Loading;