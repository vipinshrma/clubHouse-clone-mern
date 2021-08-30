import React from "react";
import { Button } from "@material-ui/core";

export default function StepUsername({ onClick }) {
	return (
		<div>
			<h1>Ste user names</h1>
			<Button onClick={onClick} variant="contained" color="primary">
				Next
			</Button>
		</div>
	);
}
