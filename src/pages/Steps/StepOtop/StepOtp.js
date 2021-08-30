import React from "react";
import { Button } from "@material-ui/core";

export default function StepOtp({ onClick }) {
	return (
		<div>
			<h1>Step otop</h1>
			<Button onClick={onClick} variant="contained" color="primary">
				Next
			</Button>
		</div>
	);
}
