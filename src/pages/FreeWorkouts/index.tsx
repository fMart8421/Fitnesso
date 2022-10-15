import React from "react";
import FreeMealPlan from "../../components/FreeMealPlan";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import Socials from "../../components/Socials";
import { freeProducts } from "../Home/info";

const FreeWorkouts = () => {
    return (
        <section className="overflow-x-hidden bg-slate-100">
            <Hero className="py-24 mx-10" bannerColor="primary-lighter" bannerTextColor="primary" bannerText="Free Home Workouts" />
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
