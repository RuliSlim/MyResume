import React from "react";
import { useSelector } from "react-redux";
import { useDevice } from "./hooks/device";
import { RootStore } from "./interfaces/model/store";
import Dashboard from "./pages/dashboard";

const App = (): JSX.Element => {
	const data: ProjectState = useSelector((state: RootStore) => state.project);
	const screen = useDevice();
	const image = screen.device.isMobile ? data?.projects[1]?.images[1] ?? "" : data?.projects[1]?.images[0] ?? "";
	const height = screen.device.isMobile ? "120vh" : "100vh";
	// const width = device.device.isMobile ? "auto"

	return (
		<React.Fragment>
			<div className="text-white" style={{ height: "100vh", width: "100vw" }}>
				<img className="absolute top-0 left-0 object-fill" style={{ zIndex: -1, width: "100vw", height: height }} src={image} />
				<div className="bg-black bg-opacity-60 text-white" style={{ height: height, width: "100vw" }}>
					<Dashboard />
				</div>
			</div>
		</React.Fragment>
	);
};

export default App;
