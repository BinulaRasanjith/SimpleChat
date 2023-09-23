import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";

import App from "./App.tsx";
import { teal, blue } from "@mui/material/colors";
import "./index.css";
import ToastProvider from "./contexts/ToastContext.tsx";

const theme = createTheme({
	palette: {
		primary: teal,
		secondary: blue,
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={theme}>
		<ToastProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ToastProvider>
	</ThemeProvider>
);
