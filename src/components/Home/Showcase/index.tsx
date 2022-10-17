import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Button from "../../Button";
import classes from "./index.module.css";

const Showcase: React.FC<{
    title: string;
    subtitle: string;
    buttonText: string;
    description: string;
    image: string;
    imageText: string;
    onIndexChange: (offset: number) => void;
}> = (props) => {
    const leftButtonClickHandler = (e: React.MouseEvent) => {
        setIsAnimating(false);
        props.onIndexChange(-1);
        setIsAnimating(true);

    };
    const rightButtonClickHandler = (e: React.MouseEvent) => {
        props.onIndexChange(1);
    };

    const [isAnimating, setIsAnimating] = useState(false);


    return (
        <section className="grid grid-cols-12 mx-10 gap-x-28">
            <div className="col-span-6 w-full">
                <p className=" font-permanentmarker text-[#8ea5a0] text-6xl text-center -mb-3">
                    {props.imageText}
                </p>
                <div className="relative">
                    <CSSTransition
                    in={isAnimating}
                    classNames={{
                        enterActive:classes["fade-in-enter-active"],
                        exitActive:classes["fade-in-exit-active"],
                        appearActive:classes["fade-in-enter-active"],
                    }}
                    timeout={1000}
                    >
                    <img
                        className={`rounded-xl h-[700px] w-full object-cover ${
                            classes["fade-in"]
                        }`}
                        src={props.image}
                        alt="woman doing exercise"
                    />
                    </CSSTransition>
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
            <div className="col-span-6 mr-12 flex flex-col justify-center items-start">
                <h3 className="font-medium">{props.subtitle}</h3>
                <h1 className="text-7xl font-semibold mt-6">{props.title}</h1>
                <p className="text-xl my-8">{props.description}</p>
                <Button text={props.buttonText}></Button>
            </div>
        </section>
    );
};

export default Showcase;
