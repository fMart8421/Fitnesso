import React, { useCallback, useEffect, useRef, useState } from "react";

const MotivationBar: React.FC<{ text: string }> = (props) => {
    const windowHeight = window.innerHeight;
    const [scale, setScale] = useState(1);
    const barRef = useRef<HTMLElement>(null);

    const getBarScale = useCallback(() => {
        if (
            barRef.current?.getBoundingClientRect().y &&
            barRef.current?.getBoundingClientRect().y < windowHeight &&
            barRef.current?.getBoundingClientRect().y >
                -barRef.current.offsetHeight
        ) {
            setScale(
                2 - barRef.current?.getBoundingClientRect().y / (windowHeight*3)
            );
        }
    }, [windowHeight]);
    useEffect(() => {
        window.addEventListener("scroll", getBarScale);
    }, [getBarScale]);
    return (
        <section
            ref={barRef}
            className="relative px-10 py-[150px] flex items-center justify-center overflow-hidden"
        >
            <img
                className="absolute left-0 top-0 -translate-y-1/2"
                alt=""
                src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80ac6d9d7551056aca3cbf_Lines.svg"
            />
            <img
                className="absolute left-0 top-0 h-full w-full object-cover -z-10 transition-transform duration-300 ease-out"
                alt=""
                src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc39957e0ac4472fadd9_meghan-holmes-wy_L8W0zcpI-unsplash.jpg"
                style={{
                    transform: `scale(${scale})`,
                }}
            />
            <h1 className="font-permanentmarker text-6xl py-16 text-white uppercase">
                {props.text}
            </h1>
        </section>
    );
};

export default MotivationBar;
