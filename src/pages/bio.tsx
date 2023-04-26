/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
//@ts-ignore
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Bio = (): JSX.Element => {
	const [ animate, setAnimate ] = React.useState<string>("");
	const desc = "I am software engineer with 3 year of experience and a proven knowledge of web development frontend, backend and mobile development.";

	React.useEffect(() => {
		setTimeout(() => {
			setAnimate("glow 3s infinite");
		}, 5000);
	}, []);
	return (
		<div className="relative h-screen w-screen">
			<div className="flex flex-col space-y-5 text-center absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
				<p className="text-3xl font-bold">
					<Fade left cascade duration={7000}>
						Hey, I am Ruli..
					</Fade>
				</p>
				<p>
					<Fade left cascade duration={7000}>
						{desc}
					</Fade>
				</p>
				<Link className="rounded-full py-3 px-6 md:w-1/4 mx-auto bg-gray-500" style={{ animation: animate }} to="/projects">
					<Fade left cascade duration={7000}>
						Know me better
					</Fade>
				</Link>
			</div>
		</div>
	);
};

export default Bio;
