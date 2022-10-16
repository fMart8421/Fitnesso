import React from "react";
import FreeMealPlan from "../../components/FreeMealPlan";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import Socials from "../../components/Socials";
import { freeProducts } from "../../data/info";

const FreeWorkouts = () => {
    return (
        <section className="overflow-x-hidden bg-slate-100">
            <Hero
                heroImage="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc36d802d646728a8558_guillaume-bolduc-hdBaq9W0hRY-unsplash.jpg"
                className="py-24 mx-10"
                bannerColor="primary-lighter"
                bannerTextColor="primary"
                bannerText="Free Home Workouts"
            />
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
