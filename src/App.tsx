import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Loading } from "./components";
import { useDevice } from "./hooks/device";
import { RootStore } from "./interfaces/model/store";
import { getAllProjects } from "./store/project/actionCreators";

const Dashboard = React.lazy(() => import("./pages/dashboard"));
const Bio = React.lazy(() => import("./pages/bio"));

const App = (): JSX.Element => {
	const dispatch = useDispatch();
	const loading = useSelector((state: RootStore) => state.project.loading);
	const data: ProjectState = useSelector((state: RootStore) => state.project);
	const screen = useDevice();
	const image = screen.device.isMobile ? data?.projects[1]?.images[1] ?? "" : data?.projects[1]?.images[0] ?? "";
	const height = screen.device.isMobile ? "120vh" : "110vh";

	React.useEffect(() => {
		dispatch(getAllProjects());
	}, []);

	if (loading) {
		return <Loading />;
	} else {
		return (
			<React.Fragment>
				<div className="text-white min-h-screen" style={{ backgroundImage: `url("${image}")`, backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundPosition: "center" }}>
					{/* <img className="absolute top-0 left-0 object-fill min-h-screen w-full" style={{ zIndex: -1 }} src={image} /> */}
					<div className="bg-black bg-opacity-60 min-h-screen">
						<BrowserRouter>
							<Suspense fallback={<Loading />}>
								<Route exact path="/" component={Bio} />
								<Route path="/projects" component={Dashboard} />
							</Suspense>
						</BrowserRouter>
					</div>
				</div>
			</React.Fragment>
		);
	}

};

export default App;
