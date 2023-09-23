import {
	Alert,
	Box,
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import styleProps from "./styleProps";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import useToast from "../hooks/useToast";

const Login = () => {
	const { showToast } = useToast();
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleSubmit = () => {
		showToast("Login failed!", "error", 5000);
	};

	return (
		// Container for login page
		<Box sx={styleProps.containerPage}>
			{/* Container for login form*/}
			<Paper elevation={8} sx={styleProps.containerForm}>
				<Typography variant="h3" sx={styleProps.formHeader}>
					LOGIN
				</Typography>
				<TextField
					id="username"
					label="Username"
					variant="outlined"
					sx={styleProps.formTextfield}
				/>
				<FormControl sx={styleProps.formTextfield} variant="outlined">
					<InputLabel htmlFor="outlined-adornment-password">
						Password
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password"
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									// onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
					/>
				</FormControl>
				<Button variant="contained" onClick={handleSubmit}>
					Login
				</Button>
				<Alert severity="error" variant="standard">
					Login failed!
				</Alert>
			</Paper>
		</Box>
	);
};

export default Login;
