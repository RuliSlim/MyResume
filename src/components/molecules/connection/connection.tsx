import React from "react";
import MyText from "../../atoms/text/text";

const Connection = (): JSX.Element => {
	const [ hour, setHour ] = React.useState<number>(0);
	const [ time, setTime ] = React.useState<number>(0);

	const getTime = (): void => {
		const d = new Date(); // for now
		setHour(d.getHours()); // => 9
		setTime(d.getMinutes()); // =>  30
	};

	React.useEffect(() => {
		setInterval(() => {
			getTime();
		}, 1000);
	}, []);

	return (
		<div className="self-start h-auto w-auto space-x-2">
			{/* <i className="fas fa-wifi"></i> */}
			<MyText text={`${hour}:${time}`} weight="normal" type="normal" />
		</div>
	);
};

export default Connection;