/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { MyText } from "../..";
//@ts-ignore
import Rotate from "react-reveal/Rotate";

const Description = (props: IDescription): JSX.Element => {
	const { data } = props;
	const { title, desc, roles, stacks } = data;

	return (
		<div className="flex flex-col space-y-5">
			<div className="flex flex-row space-x-5 items-center">
				<MyText text={title} type="title" weight="bold" />
				<i className="fas fa-dot-circle "></i>
			</div>
			<div className="flex flex-row space-x-5">
				<div>
					<Rotate bottom right cascade>
						<MyText text="description" type="caption" weight="light" />
						<p>{desc}</p>
					</Rotate>
				</div>
				<div>
					<MyText text="roles" type="caption" weight="light" />
					<p>{roles}</p>
				</div>
				<div>
					<MyText text="stacks" type="caption" weight="light" />
					<p>{stacks[0]}</p>
				</div>
			</div>
		</div>
	);
};

export default Description;