import React from "react";
import Button from "../../Button";

const Showcase = () => {
    return (
        <section className="grid grid-cols-12 mx-10 gap-x-28">
            <div className="col-span-6 justify-self-center">
                <p className=" font-permanentmarker text-[#8ea5a0] text-6xl text-center -mb-3">
                    Sandra Lyons
                </p>
                <div className="relative">
                    <img
                        className="rounded-xl h-[700px]"
                        src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80a6e90c4ef4bcb4fd3071_Rectangle%20439.png"
                        alt="woman doing exercise"
                    />
                    <button className="absolute bottom-10 left-10 aspect-square rounded-full border-2 border-primary bg-primary/30 h-[100px] flex items-center justify-center">
                        <img
                            className="max-w-[35%]"
                            alt="arrow facing left"
                            src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-left.png"
                        />
                    </button>
                    <button className="absolute bottom-10 right-10 aspect-square rounded-full border-2 border-primary bg-primary/30 h-[100px] flex items-center justify-center">
                        <img
                            className="max-w-[35%]"
                            alt="arrow facing left"
                            src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-right.png"
                        />
                    </button>
                </div>
            </div>
            <div className="col-span-6 mr-12 flex flex-col justify-center items-start">
                <h3 className="font-medium">Hi, I'm Sandra Lyons</h3>
                <h1 className="text-7xl font-semibold mt-6">
                    Your go to online fitness trainer and nutritionist.
                </h1>
                <p className="text-xl my-8">
                    After getting a bachelors in nutrition and fitness training
                    I started working with people all around and changing their
                    lives forever.
                </p>
                <Button text="Online Coaching"></Button>
            </div>
        </section>
    );
};

export default Showcase;
