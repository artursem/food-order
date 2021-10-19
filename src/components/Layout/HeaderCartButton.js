import React from "react";
import CardIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CardIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>
                3
            </span>
		</button>
	);
}
