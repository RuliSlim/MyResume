/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { MyText } from "../..";
//@ts-ignore
import Rotate from "react-reveal/Rotate";

const Description = (): JSX.Element => {
	return (
		<div className="flex flex-col space-y-5">
			<div className="flex flex-row space-x-5 items-center">
				<MyText text="Ini judul" type="title" weight="bold" />
				<i className="fas fa-dot-circle "></i>
			</div>
			<div className="flex flex-row space-x-5">
				<div>
					<Rotate bottom right cascade>
						<MyText text="description" type="caption" weight="light" />
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam inventore nesciunt blanditiis nobis iste fuga quo cupiditate, earum molestiae debitis ratione mollitia delectus itaque doloremque nisi labore dolor. Atque exercitationem nulla, fuga inventore dolores soluta iusto omnis cum molestiae?</p>
					</Rotate>
				</div>
				<div>
					<MyText text="roles" type="caption" weight="light" />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam inventore nesciunt blanditiis nobis iste fuga quo cupiditate, earum molestiae debitis ratione mollitia delectus itaque doloremque nisi labore dolor. Atque exercitationem nulla, fuga inventore dolores soluta iusto omnis cum molestiae?</p>
				</div>
				<div>
					<MyText text="stacks" type="caption" weight="light" />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam inventore nesciunt blanditiis nobis iste fuga quo cupiditate, earum molestiae debitis ratione mollitia delectus itaque doloremque nisi labore dolor. Atque exercitationem nulla, fuga inventore dolores soluta iusto omnis cum molestiae?</p>
				</div>
			</div>
		</div>
	);
};

export default Description;