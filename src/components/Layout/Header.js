import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

function Header(props) {
	return <Fragment>
        <header className={classes.header}>
            <h1>pożywienie</h1>
            <HeaderCartButton>Cart</HeaderCartButton>

        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of food" />
        </div>
    </Fragment>;
}

export default Header;
