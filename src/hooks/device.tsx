import React from "react";

interface Device {
	isMobile: boolean;
	isTablet: boolean;
	isLaptop: boolean;
}

export const useDevice = (): {device: Device} => {
	const [ device, setDevice ] = React.useState<Device>({
		isLaptop: false,
		isMobile: false,
		isTablet: false
	});

	const resizeWindow = (): void => {
		const size = window.innerWidth;
		if (size <= 960) setDevice({ ...device, isMobile: true });
		if (size > 960 && size < 1280) setDevice({ ...device, isTablet: true });
		if (size > 1280) setDevice({ ...device, isLaptop: true });
	};

	React.useEffect(() => {
		resizeWindow();
	}, []);

	return { device };
};