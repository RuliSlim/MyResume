/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { MyText } from "../..";
//@ts-ignore
import { Rotate } from "react-reveal";

const Description = (props: IDescription): JSX.Element => {
	const { data } = props;
	const { title, desc, roles, stacks, tips } = data;

	return (
		<div className="flex flex-col space-y-5">
			<div className="flex flex-row space-x-5 items-center">
				<MyText text={title} type="title" weight="bold" />
				<i className="fas fa-dot-circle "></i>
			</div>
			<div className="flex flex-row text-left">
				<div className="flex-1 space-y-2 h-4/12">
					<MyText text="description" type="caption" weight="light" />
					<Rotate bottom right cascade duration={3000}>
						<p>{desc}</p>
					</Rotate>
					{ tips &&
					<React.Fragment>
						<MyText text="tips" type="caption" weight="light" />
						<Rotate bottom right cascade duration={3000}>
							<p>{tips}</p>
						</Rotate>
					</React.Fragment>
					}
				</div>
				<div className="flex-1 text-right space-y-2" >
					<MyText text="stacks" type="caption" weight="light" />
					<Rotate bottom left cascade duration={3000}>
						<ul className="list-inside list-disc">
							{roles.map(el => (
								<li className="pl-5" key={el}>{el}</li>
							))}
						</ul>
					</Rotate>
				</div>
				<div className="flex-1 text-right space-y-2" >
					<MyText text="stacks" type="caption" weight="light" />
					<Rotate bottom left cascade duration={3000}>
						<ul className="list-inside list-disc">
							{stacks.map(el => (
								<li className="pl-5" key={el}>{el}</li>
							))}
						</ul>
					</Rotate>
				</div>
			</div>
		</div>
	);
};

export default Description;