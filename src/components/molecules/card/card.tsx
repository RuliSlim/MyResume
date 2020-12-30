import React from "react";
import { MyImage } from "../..";

const Card = (props: ICard): JSX.Element => {
	const { id, navigate, data } = props;
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
			<MyImage size="m" type="card" source={data.images[0]} id={id}/>
			{ id === 1 &&
				<i className="fas fa-dot-circle absolute top-5 right-5 text-white"></i>
			}
		</div>
	);
};

export default Card;