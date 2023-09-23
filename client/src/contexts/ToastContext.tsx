import { Alert, Snackbar, AlertColor } from "@mui/material";
import { useState, createContext } from "react";

interface ToastProviderProps {
	children: React.ReactNode;
}

export const ToastContext = createContext({});

const ToastProvider = ({ children }: ToastProviderProps) => {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [severity, setSeverity] = useState("success" as AlertColor);
	const [duration, setDuration] = useState(5000);

	const showToast = (
		message: string,
		severity: AlertColor,
		duration: number
	) => {
		setMessage(message);
		setSeverity(severity);
		setDuration(duration);
		setOpen(true);
	};

	const hideToast = () => {
		setOpen(false);
	};

	return (
		<ToastContext.Provider value={{ showToast, hideToast }}>
			{children}
			<Snackbar open={open} autoHideDuration={duration} onClose={hideToast}>
				<Alert
					severity={severity}
					onClose={hideToast}
					variant="filled"
					sx={{ width: "100%" }}
				>
					{message}
				</Alert>
			</Snackbar>
		</ToastContext.Provider>
	);
};

export default ToastProvider;
