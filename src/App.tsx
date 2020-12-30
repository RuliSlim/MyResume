import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "./interfaces/model/store";
import Dashboard from "./pages/dashboard";

const App = (): JSX.Element => {
	const data: ProjectState = useSelector((state: RootStore) => state.project);
	return (
		<React.Fragment>
			<div className="text-white" style={{ height: "100vh", width: "100vw" }}>
				<img className="absolute top-0 left-0 object-fill" style={{ zIndex: -1, width: "100vw", height: "100vh" }} src={data?.projects[1]?.images[0] ?? ""} />
				<div className="bg-black bg-opacity-60 text-white" style={{ height: "100vh", width: "100vw" }}>
					<Dashboard />
				</div>
			</div>
		</React.Fragment>
	);
};

export default App;
