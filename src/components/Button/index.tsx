import React, { useState } from "react";

import classes from "./index.module.css";

const Button = (props: {
    text: string;
    className?: string;
    inlineTextClassName?: string;
    overlayColor?:string
}) => {
    const [isHovering, setIsHovering] = useState(false);

    const mouseEnterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsHovering(true);
    };
    const mouseLeaveHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsHovering(false);
    };

    const className = `${
        props.className ? props.className : ""
    } bg-primary text-white text-sm font-semibold p-5 pl-3 rounded-md hover:-translate-y-1 transition ${
        classes["group"]
    } relative z-0`;
    return (
        <button
            className={className}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <span
                className={`inline-block ${
                    isHovering ? classes["open"] : classes["close"]
                } transition origin-right hover:white-filter`}
            ></span>
            <span
                className={`absolute top-0 left-0 w-full h-full z-10 transition ${
                    isHovering && (props.overlayColor ? props.overlayColor : "bg-white/40")
                } duration-200`}
            ></span>
            {"> "}
            <span
                className={
                    props.inlineTextClassName
                        ? props.inlineTextClassName
                        : "pl-2"
                }
                style={{ letterSpacing: "2px" }}
            >
                {props.text.toUpperCase()}
            </span>
        </button>
    );
};

export default Button;
