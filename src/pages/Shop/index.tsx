import React, { useState } from "react";
import FreeMealPlan from "../../components/FreeMealPlan";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import Socials from "../../components/Socials";
import {
    nutritionProducts,
    premiumProducts,
    trainingProducts,
} from "../../data/info";

const categories = [
    {
        id: "cat1",
        name: "All",
        image: "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc36d802d646728a8558_guillaume-bolduc-hdBaq9W0hRY-unsplash.jpg",
        text: "Premium Programs",
        products: premiumProducts,
    },
    {
        id: "cat2",
        name: "Nutrition",
        image: "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc330c4ef42626fe067e_derick-mckinney-__QqvTI5Edc-unsplash.jpg",
        text: "Nutrition",
        products: nutritionProducts,
    },
    {
        id: "cat3",
        name: "Training",
        image: "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8330149a30c574961cfcf3_logan-weaver-WJUrYr5KqSw-unsplash.jpg",
        text: "Training",
        products: trainingProducts,
    },
];

const Shop = () => {
    const [category, setCategory] = useState(categories[0]);

    const changeCategoryHandler = (
        event: React.MouseEvent<HTMLButtonElement>,
        index: number
    ) => {
        setCategory(categories[index]);
    };

    return (
        <section className="overflow-x-hidden bg-slate-100 pt-16">
            <Hero
                heroImage={category.image}
                className="py-24 mx-10"
                bannerColor="primary"
                bannerTextColor="white"
                bannerText={category.text}
            />
            <div className="flex justify-between mx-10 uppercase pb-4 border-b-slate-200 border-b-2 my-16">
                <p className="font-medium">CATEGORIES</p>
                <div className="flex gap-10 font-sans mr-4">
                    {categories.map((cat, ind) => (
                        <button
                            className="p-4"
                            onClick={(e) => changeCategoryHandler(e, ind)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>
            <ProductList
                className="mx-10 my-24"
                products={category.products}
                actionText="view"
            />
            <FreeMealPlan />
            <Socials />
        </section>
    );
};

export default Shop;
