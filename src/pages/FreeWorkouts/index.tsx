import React from "react";
import FreeMealPlan from "../../components/FreeMealPlan";
import ProductList from "../../components/ProductList";
import Socials from "../../components/Socials";
import { freeProducts } from "../Home/info";

const FreeWorkouts = () => {
    return (
        <section className="overflow-x-hidden bg-slate-100">
            <div className="relative py-24 mx-10">
                <div className="relative">
                    <img
                        alt=""
                        className="h-[600px] w-full object-cover rounded-xl"
                        src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc36d802d646728a8558_guillaume-bolduc-hdBaq9W0hRY-unsplash.jpg"
                    />
                    <img className="absolute right-0 bottom-0 h-[350px]" alt="" src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832c916203834f1ed18f1c_Group%20117.svg" />

                </div>
                <div className="py-16 absolute top-1/2 -translate-y-1/2 w-[150%] -translate-x-[15%] bg-primary-lighter text-primary text-center rotate-2">
                    <h1 className="font-medium text-7xl capitalize font-sans -rotate-2">
                        Free Home Workouts
                    </h1>
                </div>
            </div>
            <ProductList
                className="mx-10"
                products={freeProducts}
                actionText="Train Now"
            />
            <FreeMealPlan></FreeMealPlan>
            <Socials />
        </section>
    );
};

export default FreeWorkouts;
