import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import { Box, Typography } from "@material-ui/core";

const useStyle = makeStyles({
	card: {
		width: "500px",
		maxWidth: "90%",
		minHeight: "300px",
		background: "#1D1D1D",
		color: "#fff",
		padding: "30px",
		borderRadius: "20px",
		textAlign: "center",
	},
	text: {
		fontSize: "22px",
		lineHeight: "1.6",
		color: "#C4C5C5",
	},
	cardWrapper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "6rem",
	},
});

export default function CardComponent({ title, icon, children }) {
	const classes = useStyle();
	return (
		<>
			<Box className={classes.cardWrapper}>
				<Card className={classes.card}>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						mb="30px"
						gridGap="10px"
					>
						<img src={icon} scr="logo" />
						<Typography variant="h6">{title}</Typography>
					</Box>

					{children}
				</Card>
			</Box>
		</>
	);
}
