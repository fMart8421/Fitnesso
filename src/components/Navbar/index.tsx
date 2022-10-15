import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-6 px-8 sticky top-0 z-10 bg-slate-100/50">
            <button>
                <img
                    className="h-[30px]"
                    alt="Black Fitnesso Logo"
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808ce7dc544553a7f1b1e4_Black.svg"
                />
            </button>
            <ul className="flex gap-8 items-center">
                <li>
                    <NavLink to="/">About</NavLink>
                </li>
                <li>
                    <NavLink to="/free-workouts">Free Workouts</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                    <Button className="py-4" text="Book a call" />
                </li>
                <li>
                    <button className="font-bold text-sm align-middle">
                        <img
                            className="inline-block pr-2"
                            alt=""
                            src="/icons/cart.png"
                        />{" "}
                        3
                    </button>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
