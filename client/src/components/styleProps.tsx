import { SxProps } from "@mui/material";
import { teal } from "@mui/material/colors";

const styleProps: {
	appBarButton: SxProps;
} = {
	appBarButton: {
		marginLeft: "1rem",
		":hover": {
			backgroundColor: "rgba(255, 255, 255)",
			color: teal[900],
			border: "none",
		},
	},
};

export default styleProps;
