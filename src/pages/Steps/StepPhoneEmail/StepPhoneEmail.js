import React from "react";
import { Button } from "@material-ui/core";

export default function StepPhoneEmail({ onClick }) {
	return (
		<div>
			<h1>Step phonee email</h1>
			<Button onClick={onClick} variant="contained" color="primary">
				Next
			</Button>
		</div>
	);
}
