import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CardIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce(
		(curNumber, item) => {
			return curNumber + item.amount;
		}, 0);

	return (
		<button
			className={classes.button}
			onClick={props.onClick}
		>
			<span className={classes.icon}>
				<CardIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>
				{numberOfCartItems}
			</span>
		</button>
	);
}
