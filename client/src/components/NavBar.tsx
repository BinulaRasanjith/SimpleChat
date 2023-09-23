import { Home } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import styleProps from "./styleProps";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const navigate = useNavigate();

	const homeClick = () => {
		navigate("/");
	};

	const loginClick = () => {
		navigate("/login");
	};

	const signupClick = () => {
		navigate("/signup");
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					onClick={homeClick}
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<Home />
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					SimpleChat
				</Typography>
				<Button
					onClick={signupClick}
					color="inherit"
					variant="outlined"
					sx={styleProps.appBarButton}
				>
					Signup
				</Button>
				<Button
					onClick={loginClick}
					color="inherit"
					variant="outlined"
					sx={styleProps.appBarButton}
				>
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
