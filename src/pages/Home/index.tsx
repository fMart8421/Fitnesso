import React from "react";
import Button from "../../components/Button";
import FeatureList from "../../components/Home/FeatureList";
import ProductList from "../../components/ProductList";
import Showcase from "../../components/Home/Showcase";

import classes from "./index.module.css";
import { features, freeProducts, premiumProducts } from "./info";
import FreeMealPlan from "../../components/FreeMealPlan";
import Socials from "../../components/Socials";

const Home = () => {
    return (
        <section className="mt-16">
            <Showcase></Showcase>
            <section
                className={`relative flex justify-around text-white py-64 items-center overflow-x-hidden overflow-y-hidden`}
            >
                <div
                    className={`absolute w-[150%] h-[50%] bg-primary -z-10 ${classes["blue-stripe"]}`}
                ></div>
                <p className="text-center font-medium text-sm">
                    <span className="font-bold text-3xl block pb-3">1900+</span>
                    HAPPY CLIENTS
                </p>
                <p className="text-center font-medium text-sm">
                    <span className="font-bold text-3xl block pb-3">5 yrs</span>
                    OF EXPERIENCE
                </p>
                <p className="text-center font-medium text-sm">
                    <span className="font-bold text-3xl block pb-3">156K</span>
                    FOLLOWING ME
                </p>
                <div
                    className={`absolute bottom-0 w-full h-[50%] bg-white -z-20`}
                ></div>
            </section>
            <section className="bg-white mx-32 flex flex-col justify-center items-center mt-16 mb-32">
                <h1 className="text-6xl text-center max-w-[60%] font-bold">
                    The journey to a healthier body starts right now
                </h1>
                <Button className="mt-8" text="online coaching"></Button>
                <FeatureList features={features} />
            </section>
            <section className="bg-slate-100 p-10">
                <div className="max-w-[65%] my-16">
                    <h1 className="text-8xl font-extrabold mb-5">
                        Free home workouts and fitness plans
                    </h1>
                    <h3 className="font-medium text-xl max-w-[65%] my-5">
                        With free online classes people who don't have the time
                        or money to afford a personal coach can make change
                        their lives forever.
                    </h3>
                    <Button
                        className="mt-5"
                        text="view all"
                        inlineTextClassName="pr-6 pl-8"
                    ></Button>
                </div>
                <ProductList actionText="Train Now" products={freeProducts} />
            </section>
            <section className="relative p-10 bg-primary overflow-y-hidden">
                <img
                    className={`absolute top-0 right-0`}
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808c24d802d6d97489018c_Lines%201.svg"
                />
                <div className="max-w-[65%] my-16 text-white">
                    <h1 className="text-8xl font-extrabold mb-5">
                        Premium workouts and fitness plans
                    </h1>
                    <h3 className="font-medium text-xl max-w-[65%] my-5">
                        I've created these premium fitness classes for everyone
                        starting from beginner to advanced level with an in
                        depth FAQ.
                    </h3>
                    <Button
                        className="mt-5 bg-white text-primary"
                        text="view all"
                        inlineTextClassName="pr-6 pl-8"
                    ></Button>
                </div>
                <ProductList actionText="View" products={premiumProducts} />
            </section>
            <section className="relative px-10 py-[150px] flex items-center justify-center overflow-hidden">
                <img
                    className="absolute left-0 top-0 -translate-y-1/2"
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80ac6d9d7551056aca3cbf_Lines.svg"
                />
                <img
                    className="absolute left-0 top-0 h-full w-full object-cover -z-10 transition-transform duration-300 ease-linear"
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc39957e0ac4472fadd9_meghan-holmes-wy_L8W0zcpI-unsplash.jpg"
                />
                <h1 className="font-permanentmarker text-6xl py-16 text-white">
                    SWEAT. GAIN. DO.
                </h1>
            </section>
            <section className="relative pl-10 grid grid-cols-2 gap-32 pt-36 pb-32 mt-16">
                <div className="my-16">
                    <h1 className="text-6xl font-extrabold mb-5">
                        Who can benefit from a fully custom online fitness plan
                        and nutrition?
                    </h1>
                    <h3 className="font-medium text-xl max-w-[65%] my-5">
                        Literally everyone. I'm currently helping people from 12
                        to 60+ years old. Everyone is getting an adjusted
                        program and a meal plan.
                    </h3>
                    <Button
                        className="mt-5"
                        text="book a call"
                        inlineTextClassName="pr-6 pl-8"
                    ></Button>
                </div>
                <img
                    className="h-[500px] w-4/5 object-cover justify-self-center rounded-xl"
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc35d802d60b338a8553_guillaume-bolduc-jWvUCKFIXbI-unsplash.jpg"
                />
                <div className="bg-primary h-3/5 w-[50vw] absolute right-0 top-16 -z-10 overflow-hidden">
                    <img
                        className="w-full h-full scale-125"
                        alt=""
                        src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80addcd75a9b21b0f7c7f9_Shapes.svg"
                    />
                </div>
            </section>

            <FreeMealPlan />
            <section className="mx-10 relative my-32 grid grid-col-3">
                <div className="w-[60%] col-span-3 justify-self-center text-center my-16">
                    <h1 className="text-6xl font-semibold">
                        Read our tips and tricks
                    </h1>
                    <h3 className="text-xl mt-8">
                        We post a lot of free content around health fitness and
                        general wellbeing. Make sure to check all of our posts
                        down below.
                    </h3>
                    <Button className="mt-8" text="view all posts" />
                </div>

                <div
                    className="rounded-xl px-8 py-8 flex flex-col-reverse h-[600px] mt-16"
                    style={{
                        backgroundImage: `url(${"https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e831e3a9e9cc3b8eccc7caf_angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg"})`,
                    }}
                >
                    <div className="bg-white rounded-lg mt-3 px-6 py-4">
                        <div className=" flex items-center mb-4">
                            <div className="h-10 w-10 rounded-full bg-primary"></div>
                            <p className=" pl-4">Curtis Valdemort</p>
                        </div>
                        <h1 className="text-3xl font-semibold my-2">
                            The 10 best exercises to do in your park
                        </h1>
                        <p className="my-2">
                            <span>{`>`}</span> Read More
                        </p>
                    </div>
                    <div className="bg-primary-lighter self-start text-xs px-1 py-1.5 rounded">
                        TRAINING
                    </div>
                </div>
            </section>

            <Socials />
        </section>
    );
};

export default Home;
