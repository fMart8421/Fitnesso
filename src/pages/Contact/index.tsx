import React from "react";
import Button from "../../components/Button";

const Contact = () => {
    return (
        <main className="relative px-10 grid grid-cols-2 mt-16 pb-32 gap-16">
            <div className="flex flex-col justify-center items-start">
                <p className="uppercase font-sans mb-4">contact</p>
                <h1 className="my-4 text-7xl font-semibold">
                    Get in touch today to schedule your discovery call.
                </h1>
                <h3 className="my-4 text-xl max-w-[75%]">
                    Just fill out this short form on the right to get started in
                    your life changing journey. If you prefer you can contact us
                    below directly.
                </h3>
                <p className="uppercase font-sans mt-8">email</p>
                <h3 className="font-bold text-2xl my-4">
                    contact@fitnesso.com
                </h3>
                <p className="uppercase font-sans my-4">phone</p>
                <h3 className="font-bold text-xl">+381 73 49 032</h3>
            </div>
            <form className="bg-primary-lighter rounded-lg flex flex-col py-10 px-8">
                <div className="grid grid-cols-2 gap-8">
                    <input className="bg-primary-light py-5 px-6 placeholder-primary rounded-lg" placeholder="Full Name" />
                    <input className="bg-primary-light py-5 px-6 placeholder-primary rounded-lg" placeholder="Current Weight" />
                    <input className="bg-primary-light py-5 px-6 placeholder-primary rounded-lg" placeholder="Goal Weigth" />
                    <input className="bg-primary-light py-5 px-6 placeholder-primary rounded-lg" placeholder="Email" />
                    <textarea className="bg-primary-light py-5 px-6 placeholder-primary rounded-lg min-h-[300px] col-span-2" placeholder="Describe your goals" />
                    <Button className="col-span-2" text="get in touch" />
                </div>
            </form>
            <img
                className="absolute right-0 bottom-0 -z-10"
                alt=""
                src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832f6a790e744037d5a35a_Green%20Lines.svg"
            />
        </main>
    );
};

export default Contact;
