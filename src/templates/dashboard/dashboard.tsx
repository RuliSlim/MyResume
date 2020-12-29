/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { Card, Description } from "../../components";
import Category from "../../components/molecules/category/category";
//@ts-ignore
import { AnimateOnChange, easings } from "react-animation";

const style = {
	animation: `pop-in ${easings.easeOutExpo} 5000ms forwards`
};

const Appbar = React.lazy(() => import("../../components/molecules/appbar/appbar"));

const Dashboard = (): JSX.Element => {
	const [ data, setData ] = React.useState<number[]>([ 1,2,3,4,5,6,7,8,9,10,12 ]);

	const navigate = (e: React.KeyboardEvent<HTMLDivElement>): void => {
		if (e.which === 37) {
			setData((prev) => {
				const newArr  = prev.filter((el, i) => i !== 0);
				newArr.push(prev[0]);
				return newArr;
			});
		} else if (e.which === 39) {
			setData((prev) => {
				const newArr  = prev.filter((el, i, arr) => i !== arr.length - 1);
				newArr.unshift(prev[prev.length - 1]);
				return newArr;
			});
		}
	};

	return (
		<div className="flex flex-col pt-5 md:pt-14 space-y-5 overflow-x-hidden	">
			<div className="container mx-auto pr-2">
				<React.Suspense fallback={<div>Loading...</div>}>
					<Appbar />
				</React.Suspense>
			</div>
			<div className="my-10 container mx-auto">
				<Category />
			</div>
			<div className="flex flex-row overflow-hidden flex-nowrap space-x-8 h-auto max-w-none -mx-48 items-center">
				{data.map((el, idx) => (
					<React.Fragment key={el}>
						<AnimateOnChange
							animationIn="popIn"
							animationOut="popOut"
							duration={5000}
							style={style}
						>
							<Card key={el} id={idx} navigate={navigate}/>
						</AnimateOnChange>
					</React.Fragment>
				))}
			</div>
			<div className="container mx-auto">
				<Description />
			</div>
		</div>
	);
};

export default Dashboard;