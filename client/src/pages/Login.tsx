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
	Grow,
} from "@mui/material";
import styleProps from "./styleProps";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import useToast from "../hooks/useToast";
import api from "../api";

const Login = () => {
	const { showToast } = useToast();

	const [showPassword, setShowPassword] = useState(false);
	const [alertData, setAlertData] = useState({
		show: false,
		message: "",
	});

	const [loginData, setLoginData] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLoginData({ ...loginData, [name]: value });
	};

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleSubmit = () => {
		if (!loginData.username || !loginData.password) {
			setAlertData({ show: true, message: "Please fill in all fields!" });
			showToast("Please fill in all fields!", "error", 3000);
			return;
		}

		api.auth
			.login(loginData.username, loginData.password)
			.then((res) => {
				console.log(res);
				showToast("Login successful!", "success", 3000);
			})
			.catch((err) => {
				console.log(err);
				setAlertData({ show: true, message: "Login failed!" });
				showToast("Login failed!", "error", 3000);
			});
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
					name="username"
					label="Username"
					variant="outlined"
					value={loginData.username}
					onChange={handleChange}
					sx={styleProps.formTextfield}
				/>
				<FormControl sx={styleProps.formTextfield} variant="outlined">
					<InputLabel htmlFor="password">Password</InputLabel>
					<OutlinedInput
						id="password"
						name="password"
						type={showPassword ? "text" : "password"}
						value={loginData.password}
						onChange={handleChange}
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
				<Grow in={alertData.show}>
					<Alert severity="error" variant="filled">
						{alertData.message}
					</Alert>
				</Grow>
			</Paper>
		</Box>
	);
};

export default Login;
