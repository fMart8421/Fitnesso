import React from "react";
import Button from "../../components/Button";
import FreeMealPlan from "../../components/FreeMealPlan";
import Socials from "../../components/Socials";

const About = () => {
    return (
        <main className="pt-32">
            <section className="relative bg-[#d2e4e0] grid grid-cols-2 gap-16 py-16 px-10 z-0">
                <div className="flex flex-col justify-center items-start">
                    <p className="uppercase font-sans mb-4">
                        HI I'M SANDRA LYONS
                    </p>
                    <h1 className="my-4 text-7xl font-semibold">
                        Who can benefit from a fully custom online fitness plan
                        & nutrition?
                    </h1>
                    <h3 className="my-4 text-xl max-w-[75%]">
                        Literally everyone. I'm currently helping people from 12
                        to 60+ years old. Everyone is getting an adjusted
                        program and a meal plan.
                    </h3>
                    <Button className="mt-4" text="Book a call" />
                </div>
                <img
                    className="rounded-xl object-cover w-full h-[700px]"
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832f3642594a78b769c981_logan-weaver-p3xsJQiu2YA-unsplash.jpg"
                />
                <img
                    className="absolute right-0 bottom-0 -z-10"
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832f6a790e744037d5a35a_Green%20Lines.svg"
                />
            </section>

            <section className="px-10 flex flex-col items-center py-32">
                <h1 className="text-6xl font-semibold text-center max-w-[45%] mb-5">
                    How does online fitness coaching work ?
                </h1>
                <h3 className="my-4 text-xl max-w-[55%] text-center mt-5 mb-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </h3>
                <div className="relative">
                    <img
                        className="h-[700px] rounded-xl"
                        alt=""
                        src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8330149a30c574961cfcf3_logan-weaver-WJUrYr5KqSw-unsplash.jpg"
                    />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-full border-2 bg-white/30 hover:bg-white/50 hover:scale-105 transition-all border-white">
                        <img
                            className="h-[30px]"
                            src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e83306467d71f6f9ea0acf4_Play%20Button.svg"
                            alt=""
                        />
                    </span>
                </div>
            </section>

            <section className="relative pl-10 grid grid-cols-2 gap-32 pt-36 pb-32 mt-16">
                <div className="my-16">
                    <h1 className="text-6xl font-extrabold mb-6">I am Aaron</h1>
                    <h3 className="font-medium text-xl max-w-[65%] my-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </h3>
                    <div className="grid grid-cols-12 gap-x-10 gap-y-4 items-center my-8">
                        <p className="font-permanentmarker font-semibold text-2xl text-[#8ea5a0] pl-2">
                            01
                        </p>
                        <p className="font-semibold col-span-11">
                            Over 10 years of experience
                        </p>
                        <p className="font-permanentmarker font-semibold text-2xl text-[#8ea5a0] pl-2">
                            02
                        </p>
                        <p className="font-semibold col-span-11">
                            Coached 2,000+ people
                        </p>
                        <p className="font-permanentmarker font-semibold text-2xl text-[#8ea5a0] pl-2">
                            03
                        </p>
                        <p className="font-semibold col-span-11">
                            Bachelors in nutrition
                        </p>
                    </div>
                    <Button
                        className="mt-5"
                        text="schedule a call"
                        inlineTextClassName=""
                    ></Button>
                </div>
                <img
                    className="h-[500px] w-4/5 object-cover justify-self-center rounded-xl"
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc3543a59d1e21194573_angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg"
                />
                <div className="bg-primary h-3/5 w-[50vw] absolute right-0 top-16 -z-10 overflow-hidden">
                    <img
                        className="w-full h-full scale-125"
                        alt=""
                        src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80addcd75a9b21b0f7c7f9_Shapes.svg"
                    />
                </div>
            </section>

            <section className="relative pr-10 grid grid-cols-2 gap-32 pt-36 pb-32">
                
                <img
                    className="h-[500px] w-4/5 object-cover justify-self-center rounded-xl"
                    alt=""
                    src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8331bf54f5df307aa05c19_logan-weaver-DVWa-aq3_m4-unsplash.jpg"
                />
                <div className="bg-primary h-3/5 w-[50vw] absolute left-0 top-16 -z-10 overflow-hidden">
                    <img
                        className="w-full h-full scale-125"
                        alt=""
                        src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80addcd75a9b21b0f7c7f9_Shapes.svg"
                    />
                </div>
                <div className="my-16">
                    <h1 className="text-6xl font-extrabold mb-6">I am Aaron</h1>
                    <h3 className="font-medium text-xl max-w-[65%] my-6">
                        Lorem ipsum dolor but on the other side, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </h3>
                    <div className="grid grid-cols-12 gap-x-10 gap-y-4 items-center my-8">
                        <p className="font-permanentmarker font-semibold text-2xl text-[#8ea5a0] pl-2">
                            01
                        </p>
                        <p className="font-semibold col-span-11">
                            Over 10 years of experience
                        </p>
                        <p className="font-permanentmarker font-semibold text-2xl text-[#8ea5a0] pl-2">
                            02
                        </p>
                        <p className="font-semibold col-span-11">
                            Coached 2,000+ people
                        </p>
                        <p className="font-permanentmarker font-semibold text-2xl text-[#8ea5a0] pl-2">
                            03
                        </p>
                        <p className="font-semibold col-span-11">
                            Bachelors in nutrition
                        </p>
                    </div>
                    <Button
                        className="mt-5"
                        text="explore our shop"
                        inlineTextClassName=""
                    ></Button>
                </div>
            </section>
            <FreeMealPlan />
            <Socials />
        </main>
    );
};

export default About;
