import React, { useEffect, useState } from "react";

import Button from "../../Button";
import classes from "./index.module.css";
let timeouts: NodeJS.Timeout[] = [];

const clearAllTimeouts = () => {
    for (let i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
        timeouts.splice(i, 1);
    }
};

const customSetTimeout = (callback: () => void, delay: number) => {
    const timeoutID = setTimeout(callback, delay);
    timeouts.push(timeoutID);
};

const animationDuration = 300;

const Showcase: React.FC<{
    title: string;
    subtitle: string;
    buttonText: string;
    description: string;
    image: string;
    imageText: string;
    onIndexChange: (offset: number) => void;
}> = (props) => {
    const { onIndexChange } = props;
    const [isAnimating, setIsAnimating] = useState(true);

    const leftButtonClickHandler = (e: React.MouseEvent) => {
        setIsAnimating(false);
        customSetTimeout(() => props.onIndexChange(-1), animationDuration);
    };
    const rightButtonClickHandler = (e: React.MouseEvent) => {
        setIsAnimating(false);
        customSetTimeout(() => props.onIndexChange(1), animationDuration);
    };

    useEffect(() => {
        if (!isAnimating) {
            customSetTimeout(() => {
                setIsAnimating(true);
            }, animationDuration);
            return () => {
                console.log("cleaning");
                setIsAnimating(true);
                clearAllTimeouts();
            };
        }
    }, [isAnimating, onIndexChange]);

    return (
        <section className="grid grid-cols-12 px-10 gap-x-28 bg-slate-100 pt-48">
            <div className="col-span-6 w-full">
                <p
                    className={`font-permanentmarker text-[#8ea5a0] text-6xl text-center -mb-3 ${
                        isAnimating
                            ? classes["slide-up"]
                            : classes["slide-down"]
                    }`}
                >
                    {props.imageText}
                </p>
                <div className="relative overflow-hidden rounded-xl bg-slate-100">
                    <div className="h-[700px]">

                    <img
                        className={`rounded-xl h-full w-full object-cover ${
                            isAnimating
                                ? classes["scale-blur-in"]
                                : classes["scale-blur-out"]
                        }`}
                        src={props.image}
                        alt="woman doing exercise"
                    />
                    </div>
                    <button
                        onClick={leftButtonClickHandler}
                        className="absolute bottom-10 left-10 aspect-square rounded-full border-2 border-primary bg-primary/30 h-[100px] flex items-center justify-center group"
                    >
                        <img
                            className="max-w-[35%] transition group-hover:-translate-x-1"
                            alt="arrow facing left"
                            src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-left.png"
                        />
                    </button>
                    <button
                        onClick={rightButtonClickHandler}
                        className="absolute bottom-10 right-10 aspect-square rounded-full border-2 border-primary bg-primary/30 h-[100px] flex items-center justify-center group"
                    >
                        <img
                            className="max-w-[35%] transition group-hover:translate-x-1"
                            alt="arrow facing left"
                            src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-right.png"
                        />
                    </button>
                </div>
            </div>
            <div
                className={`col-span-6 mr-12 flex flex-col justify-center items-start ${
                    isAnimating ? classes["fade-in-up"] : classes["fade-out-up"]
                }`}
            >
                <h3 className="font-medium">{props.subtitle}</h3>
                <h1 className="text-7xl font-semibold mt-6">{props.title}</h1>
                <p className="text-xl my-8">{props.description}</p>
                <Button text={props.buttonText}></Button>
            </div>
        </section>
    );
};

export default Showcase;
