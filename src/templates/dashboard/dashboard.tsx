/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { RootStore } from "../../interfaces/model/store";
import { useSelector, useDispatch } from "react-redux";

// components
import { Card, Description } from "../../components";
import Category from "../../components/molecules/category/category";
//@ts-ignore
import { AnimateOnChange, easings } from "react-animation";
import { changeFocus, getAllProjects } from "../../store/project/actionCreators";

const style = {
	animation: `pop-in ${easings.easeOutExpo} 5000ms forwards`
};

const Appbar = React.lazy(() => import("../../components/molecules/appbar/appbar"));

const Dashboard = (): JSX.Element => {
	const dispatch = useDispatch();
	const data: ProjectState = useSelector((state: RootStore) => state.project);

	const navigate = (e: React.KeyboardEvent<HTMLDivElement>): void => {
		if (e.which === 37) {
			dispatch(changeFocus("NEXT"));
		} else if (e.which === 39) {
			dispatch(changeFocus("PREV"));
		}
	};

	React.useEffect(() => {
		dispatch(getAllProjects());
	}, [ ]);

	React.useEffect(() => {
		console.log(data, "INI DATA ON UPD");
	}, [ data ]);

	if (data.loading) {
		return <div>loading</div>;
	} else {
		return (
			<div className="flex flex-col pt-2 md:pt-14 space-y-10 overflow-x-hidden h-screen">
				<div className="container mx-auto p-5 md:p-0">
					<React.Suspense fallback={<div>Loading...</div>}>
						<Appbar />
					</React.Suspense>
				</div>
				<div className="my-10 container mx-auto p-5 md:p-0">
					<Category />
				</div>
				<div className="flex flex-row overflow-hidden flex-nowrap space-x-8 h-auto max-w-none -mx-48 items-center">
					{data.projects.map((el, idx) => (
						<React.Fragment key={idx}>
							<AnimateOnChange
								animationIn="popIn"
								animationOut="popOut"
								duration={5000}
								style={style}
							>
								<button onClick={() => dispatch(changeFocus("ONCLICK", el))}>
									<Card id={idx} navigate={navigate} data={el}/>
								</button>
							</AnimateOnChange>
						</React.Fragment>
					))}
				</div>
				<div className="container mx-auto p-5 md:p-0">
					<Description data={data.projects[1]}/>
				</div>
			</div>
		);
	}
};

export default Dashboard;