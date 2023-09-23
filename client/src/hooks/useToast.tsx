import { useContext } from "react";

import { ToastContext } from "../contexts/ToastContext";

interface ToastContextType {
	showToast: (message: string, severity: string, duration: number) => void;
	hideToast: () => void;
}

const useToast = (): ToastContextType => {
	const context = useContext(ToastContext) as ToastContextType;

	return context;
};

export default useToast;
