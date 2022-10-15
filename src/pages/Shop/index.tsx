import React from "react";
import FreeMealPlan from "../../components/FreeMealPlan";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import Socials from "../../components/Socials";
import { premiumProducts } from "../Home/info";

const Shop = () => {
    return (
        <section className="overflow-x-hidden bg-slate-100">
            <Hero
                className="py-24 mx-10"
                bannerColor="primary"
                bannerTextColor="white"
                bannerText="Premium Programs"
            />
            <div className="flex justify-between mx-10 uppercase pb-4 border-b-slate-200 border-b-2 my-16">
                <p className="font-medium">CATEGORIES</p>
                <div className="flex gap-14 font-sans">
                    <p>All</p>
                    <p>Nutrition</p>
                    <p>Training</p>
                </div>
            </div>
            <ProductList className="mx-10 my-24" products={premiumProducts} actionText="view" />
            <FreeMealPlan />
            <Socials />
        </section>
    );
};

export default Shop;
