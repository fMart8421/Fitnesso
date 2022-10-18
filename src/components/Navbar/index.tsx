import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";

const Navbar:React.FC<{percentage:number}> = (props) => {
    
    return (
        <header
            className="flex justify-between items-center py-6 px-8 fixed top-0 z-10 w-full box-border"
            style={{
                background:`rgba(255,255,255,${Math.min(1-props.percentage,1)})`,
                padding:`${1.5*props.percentage + 0.3}rem 2rem`
            }}
        >
            <NavLink to="/">
                <img
                    className="h-[30px]"
                    alt="Black Fitnesso Logo"
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808ce7dc544553a7f1b1e4_Black.svg"
                />
            </NavLink>
            <ul className="flex gap-8 items-center">
                <li>
                    <NavLink to="/about">About</NavLink>
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
