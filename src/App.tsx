import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "./interfaces/model/store";
import Dashboard from "./pages/dashboard";

const App = (): JSX.Element => {
	const data: ProjectState = useSelector((state: RootStore) => state.project);
	return (
		<React.Fragment>
			<div className="bg-center bg-no-repeat object-fill" style={{ backgroundImage: `url(${data?.projects[1]?.images[0] ?? ""})`, height: "100vh", width: "100vw" }}>
				<Dashboard />
			</div>
		</React.Fragment>
	);
};

export default App;
