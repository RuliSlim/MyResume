import React from "react";

const Appbar = React.lazy(() => import("../../components/molecules/appbar/appbar"));

const Dashboard = (): JSX.Element => {

	return (
		<div className="flex flex-col">
			<React.Suspense fallback={<div>Loading...</div>}>
				<Appbar />
			</React.Suspense>
		</div>
	);
};

export default Dashboard;