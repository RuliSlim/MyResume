import React from "react";
import { MyImage } from "../..";

interface CardProps {
	id: number;
	navigate: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

const Card = (props: CardProps): JSX.Element => {
	const { id, navigate } = props;
	const [ names, setNames ] = React.useState<string>("relative rounded-3xl p-2");
	const myRef = React.createRef<HTMLDivElement>();

	const getName = (): void => {
		if (id === 1) {
			setNames((prev) => prev += " focus:border-4 focus:border-blue-700");
		}
	};

	React.useEffect(() => {
		getName();

		if (id === 1) {
			myRef.current?.focus();
		}

	}, [ navigate ]);

	return (
		<div className={names} style={{ outline: "none" }} ref={myRef} tabIndex={id} onKeyDown={navigate}>
			<MyImage size="m" type="card" source="https://i.imgur.com/FO5BOft.png" id={id}/>
			{ id === 1 &&
				<i className="fas fa-dot-circle absolute top-5 right-5 text-white"></i>
			}
		</div>
	);
};

export default Card;