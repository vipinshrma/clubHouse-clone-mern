import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PanToolIcon from "@material-ui/icons/PanTool";
import { Link } from "react-router-dom";
import { Box, Container, Typography } from "@material-ui/core";
const useStyle = makeStyles({
	linkText: {
		padding: "10px",
		color: "#fff",
		textDecoration: "none",
		fontWeight: "bold",
		display: "flex",
		alignItems: "center",
		gap: "10px",
		"& .MuiTypography-subtitle1": {
			fontSize: "22px",
		},
	},
	handIcon: {
		color: "#ffcf33",
	},
});

export default function Navigation() {
	const classes = useStyle();

	return (
		<>
			<Container>
				<Link to="/" className={classes.linkText}>
					<PanToolIcon className={classes.handIcon} />
					<Typography variant="subtitle1">Coderhouse</Typography>
				</Link>
			</Container>
		</>
	);
}
