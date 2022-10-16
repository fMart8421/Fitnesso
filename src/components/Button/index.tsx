import React from "react";

const Button = (props: { text: string, className?: string, inlineTextClassName?:string }) => {
    const className=`${props.className ? props.className :""} bg-primary text-white text-sm font-semibold p-5 pl-3 rounded-md`
    return (
        <button className={className}>
            {"> "}
            <span className={props.inlineTextClassName? props.inlineTextClassName : "pl-2"} style={{letterSpacing:"2px"}}>{props.text.toUpperCase()}</span>
        </button>
    );
};

export default Button;
