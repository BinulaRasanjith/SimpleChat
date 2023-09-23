import { createContext, ReactNode } from "react";

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: AuthProviderProps) => {
	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
