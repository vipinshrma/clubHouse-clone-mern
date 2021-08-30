import React from "react";
import Logo from "../../images/logo.png";
import Arrow from "../../images/Vector.png";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, makeStyles } from "@material-ui/core";
import Card from "../../components/card/Card";

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
		marginBottom: "30px",
	},
	cardWrapper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "6rem",
	},
	button: {
		background: "#0077FF",
		color: "#fff",
		padding: "10px 20px",
		border: "none",
		outline: "none",
		display: "flex",
		alignItems: "center",
		margin: "0 auto",
		fontSize: "18px",
		fontWeight: "bold",
		borderRadius: "50px",
		textTransform: "none",
		transition: "all 0.3s ease-in-out",

		"&:hover": {
			background: "#014a9c",
		},
	},
	arrowIcon: {
		marginLeft: "10px",
	},
	signInWrapper: {
		marginTop: "20px",
		color: "#0077FF",
		display: "flex",
		justifyContent: "center",
		gap: "10px",
	},
});

export default function Home() {
	const classes = useStyle();
	const history = useHistory();

	const registerHandler = () => {
		console.log("register handler");
		history.push("/register");
	};

	return (
		<>
			<Card title={"Welcome to Codershouse!"} icon={Logo}>
				<Typography variant="body1" className={classes.text}>
					We’re working hard to get Codershouse ready for everyone! While we
					wrap up the finishing youches, we’re adding people gradually to make
					sure nothing breaks :)
				</Typography>
				<Box>
					<Button
						onClick={registerHandler}
						variant="contained"
						className={classes.button}
					>
						Get your username
						<img src={Arrow} scr="arrow" className={classes.arrowIcon} />
					</Button>
				</Box>
				<Box className={classes.signInWrapper}>
					<Typography variant="body1">Have an invite text?</Typography>
					<Link to="/login" style={{ color: "#0077FF", fontWeight: "bold" }}>
						Sign In
					</Link>
				</Box>
			</Card>
		</>
	);
}
