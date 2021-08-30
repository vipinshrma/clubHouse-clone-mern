import React from "react";
import { Button } from "@material-ui/core";

export default function StepName({ onClick }) {
	return (
		<div>
			<h1>Step name</h1>
			<Button onClick={onClick} variant="contained" color="primary">
				Next
			</Button>
		</div>
	);
}
