import React from "react";
import Category from "../../components/molecules/category/category";

const Appbar = React.lazy(() => import("../../components/molecules/appbar/appbar"));

const Dashboard = (): JSX.Element => {

	return (
		<div className="flex flex-col pt-5 md:pt-14 space-y-5">
			<div className="container mx-auto pr-2">
				<React.Suspense fallback={<div>Loading...</div>}>
					<Appbar />
				</React.Suspense>
			</div>
			<div className="mt-10 container mx-auto">
				<Category />
			</div>
			<div className="container mx-auto">gambar</div>
			<div className="container mx-auto">desc</div>
		</div>
	);
};

export default Dashboard;