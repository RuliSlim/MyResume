import React from "react";
import { MyImage } from "../..";

interface CardProps {
	id: number;
	navigate: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}
const Card = (props: CardProps): JSX.Element => {
	const { id, navigate } = props;
	const myRef = React.createRef<HTMLDivElement>();

	React.useEffect(() => {
		console.log("masuk sini");
		if (id === 1) {
			myRef.current?.focus();
		}
	}, [ navigate ]);

	return (
		<div className="mt-5 relative h-card w-80 focus:h-1/2 focus:w-1/2 focus:z-10" ref={myRef} tabIndex={id} onKeyDown={navigate}>
			<MyImage size="l" type="card" source="https://i.imgur.com/FO5BOft.png"/>
			{ id === 1 &&
				<i className="fas fa-dot-circle absolute top-5 right-5 text-white"></i>
			}
		</div>
	);
};

export default Card;