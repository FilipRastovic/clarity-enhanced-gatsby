import React from "react";
// Preloader
// import Preloader from "./Preloader";
import SwitchBtn from "./SwitchBtn";

export default function Layout({ children }) {
	// const [isLoading, setIsLoading] = React.useState(true);
	// React.useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 1000); // Change the duration as per your requirement
	// 	return () => clearTimeout(timer);
	// }, []);
	return (
		<>
			{/* {isLoading && <Preloader />}  */}
			<SwitchBtn /> {children}
		</>
	);
}
