import React from "react";

const Hero: React.FC<{
    className?: string;
    bannerColor: string;
    bannerTextColor: string;
    bannerText: string;
    heroImage:string;
}> = (props) => {
    const className = "relative " + (props.className ? props.className : "");
    return (
        <div className={className}>
            <div className="relative">
                <img
                    alt=""
                    className="h-[600px] w-full object-cover rounded-xl"
                    src={props.heroImage}
                />
                <img
                    className="absolute right-0 bottom-0 h-[350px]"
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832c916203834f1ed18f1c_Group%20117.svg"
                />
            </div>
            <div
                className={`py-16 absolute top-1/2 -translate-y-1/2 w-[150%] -translate-x-[15%] bg-${props.bannerColor} text-${props.bannerTextColor} text-center rotate-2`}
            >
                <h1 className="font-medium text-7xl capitalize font-sans -rotate-2">
                    {props.bannerText}
                </h1>
            </div>
        </div>
    );
};

export default Hero;
