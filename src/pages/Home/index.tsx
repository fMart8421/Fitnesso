import React, { useCallback, useEffect, useState } from "react";
import Button from "../../components/Button";
import FeatureList from "../../components/Home/FeatureList";
import ProductList from "../../components/ProductList";
import Showcase from "../../components/Home/Showcase";

import classes from "./index.module.css";
import {
    features,
    freeProducts,
    posts,
    premiumProducts,
    showcaseInfo,
} from "../../data/info";
import FreeMealPlan from "../../components/FreeMealPlan";
import Socials from "../../components/Socials";
import MotivationBar from "../../components/Home/MotivationBar";
import PostList from "../../components/Home/PostList";
import FadeUpWrapper from "../../components/UI/FadeUpWrapper";

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedInfo, setDisplayedInfo] = useState(showcaseInfo[0]);

    const changeCurrentIndexHandler = useCallback((offset: number) => {
        if (offset > 0) {
            setCurrentIndex((prevIndex) =>
                prevIndex === showcaseInfo.length - 1 ? 0 : prevIndex + 1
            );
            return;
        }
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? showcaseInfo.length - 1 : prevIndex - 1
        );
    }, []);
    useEffect(() => {
        setDisplayedInfo(showcaseInfo[currentIndex]);
    }, [currentIndex]);

    return (
        <section className="">
            <Showcase
                title={displayedInfo.title}
                subtitle={displayedInfo.subtitle}
                buttonText={displayedInfo.buttonText}
                description={displayedInfo.description}
                image={displayedInfo.image}
                imageText={displayedInfo.imageText}
                onIndexChange={changeCurrentIndexHandler}
            ></Showcase>
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
                <FadeUpWrapper className="flex flex-col justify-center items-center transform">
                    <h1 className="text-6xl text-center max-w-[60%] font-bold">
                        The journey to a healthier body starts right now
                    </h1>
                    <Button className="mt-8" text="online coaching"></Button>
                </FadeUpWrapper>
                <FadeUpWrapper>
                    <FeatureList features={features} />
                </FadeUpWrapper>
            </section>
            <section className="bg-slate-100 p-10">
                <FadeUpWrapper>
                    <div className="max-w-[65%] my-16">
                        <h1 className="text-8xl font-extrabold mb-5">
                            Free home workouts and fitness plans
                        </h1>
                        <h3 className="font-medium text-xl max-w-[65%] my-5">
                            With free online classes people who don't have the
                            time or money to afford a personal coach can make
                            change their lives forever.
                        </h3>
                        <Button
                            className="mt-5"
                            text="view all"
                            inlineTextClassName="pr-6 pl-8"
                        ></Button>
                    </div>
                </FadeUpWrapper>
                <FadeUpWrapper>
                    <ProductList
                        actionText="Train Now"
                        products={freeProducts}
                    />
                </FadeUpWrapper>
            </section>
            <section className="relative p-10 bg-primary overflow-y-hidden">
                <img
                    className={`absolute top-0 right-0`}
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808c24d802d6d97489018c_Lines%201.svg"
                />
                <FadeUpWrapper>
                    <div className="max-w-[65%] my-16 text-white">
                        <h1 className="text-8xl font-extrabold mb-5">
                            Premium workouts and fitness plans
                        </h1>
                        <h3 className="font-medium text-xl max-w-[65%] my-5">
                            I've created these premium fitness classes for
                            everyone starting from beginner to advanced level
                            with an in depth FAQ.
                        </h3>
                        <Button
                            className="mt-5 bg-white text-primary"
                            text="view all"
                            inlineTextClassName="pr-6 pl-8"
                            overlayColor="bg-primary/20"
                        ></Button>
                    </div>
                </FadeUpWrapper>
                <FadeUpWrapper>
                    <ProductList
                        overlayColor="bg-primary/20"
                        actionText="View"
                        products={premiumProducts}
                    />
                </FadeUpWrapper>
            </section>
            <MotivationBar text="sweat. gain. do." />
            <section className="relative pl-10 grid grid-cols-2 gap-32 pt-36 pb-32 mt-16">
                <div className="my-16">
                    <FadeUpWrapper>
                        <h1 className="text-6xl font-extrabold mb-5">
                            Who can benefit from a fully custom online fitness
                            plan and nutrition?
                        </h1>
                        <h3 className="font-medium text-xl max-w-[65%] my-5">
                            Literally everyone. I'm currently helping people
                            from 12 to 60+ years old. Everyone is getting an
                            adjusted program and a meal plan.
                        </h3>
                        <Button
                            className="mt-5"
                            text="book a call"
                            inlineTextClassName="pr-6 pl-8"
                        ></Button>
                    </FadeUpWrapper>
                </div>
                <FadeUpWrapper>
                    <img
                        className="h-[500px] w-4/5 object-cover justify-self-center rounded-xl"
                        alt=""
                        src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc35d802d60b338a8553_guillaume-bolduc-jWvUCKFIXbI-unsplash.jpg"
                    />
                </FadeUpWrapper>
                <div className="bg-primary h-3/5 w-[50vw] absolute right-0 top-16 -z-10 overflow-hidden">
                    <img
                        className="w-full h-full scale-125"
                        alt=""
                        src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80addcd75a9b21b0f7c7f9_Shapes.svg"
                    />
                </div>
            </section>

            <FreeMealPlan />
            <section className="mx-10 relative my-32 flex items-center flex-col">
                <FadeUpWrapper className="flex items-center flex-col">
                    <div className="w-[60%] text-center my-16">
                        <h1 className="text-6xl font-semibold">
                            Read our tips and tricks
                        </h1>
                        <h3 className="text-xl mt-8">
                            We post a lot of free content around health fitness
                            and general wellbeing. Make sure to check all of our
                            posts down below.
                        </h3>
                        <Button className="mt-8" text="view all posts" />
                    </div>
                </FadeUpWrapper>
                <FadeUpWrapper>
                    <PostList posts={posts} />
                </FadeUpWrapper>
            </section>

            <Socials />
        </section>
    );
};

export default Home;
