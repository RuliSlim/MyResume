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
import { useDevice } from "../../hooks/device";
import { useSwipeable } from "react-swipeable";

const style = {
	animation: `pop-in ${easings.easeOutExpo} 5000ms forwards`
};

const Appbar = React.lazy(() => import("../../components/molecules/appbar/appbar"));

const Dashboard = (): JSX.Element => {
	const dispatch = useDispatch();
	const data: ProjectState = useSelector((state: RootStore) => state.project);
	const screen = useDevice();
	const height = screen.device.isMobile ? "120vh" : "110vh";

	const navigate = (e: React.KeyboardEvent<HTMLDivElement>): void => {
		if (e.which === 37) {
			dispatch(changeFocus("NEXT"));
		} else if (e.which === 39) {
			dispatch(changeFocus("PREV"));
		}
	};

	const handler = useSwipeable({
		onSwipedLeft: () => {
			dispatch(changeFocus("NEXT"));
		},
		onSwipedRight: () => dispatch(changeFocus("PREV")),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true
	});

	React.useEffect(() => {
		if (!data.projects.length) {
			dispatch(getAllProjects());
		}
	}, [ ]);

	if (data.loading) {
		return <div>loading</div>;
	} else {
		return (
			<div className="flex flex-col pt-2 md:pt-14 space-y-4 md:space-y-8 overflow-x-hidden">
				<div className="container mx-auto px-5 md:px-20">
					<React.Suspense fallback={<div>Loading...</div>}>
						<Appbar />
					</React.Suspense>
				</div>
				<div className="md:my-10 md:container md:mx-auto px-5 md:px-20">
					<Category />
				</div>
				<div {...handler} className="flex flex-row overflow-hidden flex-nowrap space-x-8 h-auto max-w-none -mx-10 items-center">
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
				<div className="container overflow-hidden mx-auto px-5 md:px-20">
					<Description data={data.projects[1]}/>
				</div>
			</div>
		);
	}
};

export default Dashboard;