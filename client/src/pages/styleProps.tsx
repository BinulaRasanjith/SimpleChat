import { SxProps } from "@mui/material";

// Style props for MUI components
const containerPage: SxProps = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "calc(100vh - 4rem)",
};

const containerForm: SxProps = {
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	margin: "auto",
	padding: "4rem",
	borderRadius: "1rem",
};

const formHeader: SxProps = {
	textAlign: "center",
	marginBottom: "1rem",
};

const formTextfield: SxProps = {};

export default {
	containerPage,
	containerForm,
	formHeader,
	formTextfield,
};
