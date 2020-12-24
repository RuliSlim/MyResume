import React from "react";
import MyText from "../../atoms/text/text";

const Connection = (): JSX.Element => {
	return (
		<div className="flex flex-row justify-end items-center h-auto w-auto space-x-2">
			<i className="fas fa-wifi"></i>
			<MyText text="12:25 PM" weight="normal" type="normal" />
		</div>
	);
};

export default Connection;