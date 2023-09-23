import {
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

const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	return (
		// Container for login page
		<Box sx={styleProps.containerPage}>
			{/* Container for login form*/}
			<Paper elevation={8} sx={styleProps.containerForm}>
				<Typography variant="h3" sx={styleProps.formHeader}>
					SIGNUP
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
				<TextField
					id="confirm-password"
					label="Confirm Password"
					type="password"
					variant="outlined"
					sx={styleProps.formTextfield}
				/>
				<Button variant="contained">Signup</Button>
			</Paper>
		</Box>
	);
};

export default Signup;
