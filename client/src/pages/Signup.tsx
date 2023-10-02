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
import api from "../api";

const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handelUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Set username trimming whitespace
		setUsername(e.target.value.trim());

		// Check if username is available
		if (e.target.value.trim() === "") return;
		api.auth
			.checkUsername(e.target.value.trim())
			.then((res) => {
				if (res.data.ok) {
					console.log("Username is available");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handelPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handelConfirmPasswordChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setConfirmPassword(e.target.value);
	};

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
					name="username"
					label="Username"
					value={username}
					onChange={handelUsernameChange}
					variant="outlined"
					sx={styleProps.formTextfield}
				/>
				<FormControl sx={styleProps.formTextfield} variant="outlined">
					<InputLabel htmlFor="password">Password</InputLabel>
					<OutlinedInput
						id="password"
						name="password"
						value={password}
						onChange={handelPasswordChange}
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
					/>
				</FormControl>
				<FormControl sx={styleProps.formTextfield} variant="outlined">
					<InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
					<OutlinedInput
						id="confirmPassword"
						name="confirmPassword"
						value={confirmPassword}
						onChange={handelConfirmPasswordChange}
						type={showConfirmPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={() => setShowConfirmPassword(!showConfirmPassword)}
									edge="end"
								>
									{showConfirmPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Confirm Password"
					/>
				</FormControl>
				<Button variant="contained">Signup</Button>
			</Paper>
		</Box>
	);
};

export default Signup;
