import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const LandingLayout = () => {
	return (
		<>
			<NavBar />
			<Box>
				<Outlet />
			</Box>
		</>
	);
};

export default LandingLayout;
