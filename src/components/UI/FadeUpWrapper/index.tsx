import React, { useCallback, useEffect, useRef, useState } from "react";

const FadeUpWrapper: React.FC<{ children?: React.ReactNode, className?:string }> = (props) => {
    const windowHeight = window.innerHeight;
    const [percentage, setPercentage] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const getTransformPercentage = useCallback(() => {
        const wrapperY = wrapperRef.current?.getBoundingClientRect().y;
        if (
            wrapperY &&
            wrapperY < windowHeight &&
            wrapperY >= windowHeight / 3
        ) {
            console.log((wrapperY - windowHeight / 2) / (windowHeight / 2));
            setPercentage((wrapperY - windowHeight / 2) / (windowHeight / 2));
        }
    }, [windowHeight]);
    useEffect(() => {
        window.addEventListener("scroll", getTransformPercentage);
    }, [getTransformPercentage]);

    return (
        <div
            ref={wrapperRef}
            style={{
                transform: `translateY(${Math.max(0, 40*percentage)}px)`,
                opacity:`${Math.min(1, 1.2-percentage)}`
            }}
            className={props.className}
        >
            {props.children}
        </div>
    );
};

export default FadeUpWrapper;
