import React from "react";
import Button from "../Button";

const FreeMealPlan = () => {
    return (
        <section
            className="relative py-32 px-10"
            style={{
                backgroundImage:
                    "url(https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8318706203833a1bd11fad_logan-weaver-pD5kSwtNgMc-unsplash.jpg)",
                backgroundAttachment: "fixed",
                backgroundPosition: "center center",
            }}
        >
            <div className="bg-primary-lighter py-16 flex flex-col justify-center items-center rounded-lg">
                <h1 className="font-semibold text-6xl my-4">
                    Get our free meal plan
                </h1>
                <h3 className="text-lg max-w-[50%] text-center my-4">
                    Signup to our newsletter to get a free 30 day meal plan. You
                    will receive all guidance on what to eat, how to cook and
                    how much to eat.
                </h3>
                <form className="grid grid-cols-3 gap-4 my-4 w-full px-16">
                    <input
                        className="bg-primary-light px-8 py-4 rounded-lg placeholder:text-primary outline-none"
                        placeholder="Full Name"
                    ></input>
                    <input
                        className="bg-primary-light px-8 py-4 rounded-lg placeholder:text-primary outline-none"
                        placeholder="Email"
                    ></input>
                    <Button text="signup" />
                </form>
            </div>
        </section>
    );
};

export default FreeMealPlan;
