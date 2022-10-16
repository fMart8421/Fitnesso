import React from "react";
import { instaRols1, instaRols2, socials } from "../../data/info";

const Socials = () => {
    return (
        <section
            className={`relative bg-slate-100 text-white py-48 items-center overflow-x-hidden overflow-y-hidden z-0`}
        >
            <div
                className={`absolute w-[150%] top-1/2 -translate-y-1/2 py-24 bg-[#ec8675] origin-center rotate-2 z-10 flex justify-center -translate-x-[15%]`}
            >
                <div className="flex justify-center gap-16 items-center w-[100vw]">
                    {socials.map((social) => (
                        <p className="text-3xl font-semibold">
                            <img
                                className="h-[50px] inline-block pr-4"
                                alt=""
                                src={social.logo}
                            ></img>
                            {social.title}
                        </p>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-4 gap-x-32 w-[150%] translate-x-[20%]">
                {instaRols1.map((rol) => (
                    <img
                        className="h-[400px] w-[400px] rounded-xl object-cover"
                        alt=""
                        src={rol.image}
                        key={rol.id}
                    />
                ))}
            </div>
            <div className="grid grid-cols-4 gap-x-32 mt-16 w-[150%] -translate-x-[50%]">
                {instaRols2.map((rol) => (
                    <img
                        className="h-[400px] w-[400px] rounded-xl object-cover"
                        alt=""
                        src={rol.image}
                        key={rol.id}
                    />
                ))}
            </div>
        </section>
    );
};

export default Socials;
