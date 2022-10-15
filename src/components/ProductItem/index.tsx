import React from "react";
import { Product } from "../../models/Product";

const ProductItem: React.FC<{ product: Product, actionText: string }> = (props) => {
    return (
        <div className="rounded-xl bg-white pb-8 ">
            <img
                className="h-[400px] w-full rounded-t-xl object-cover mb-4"
                alt=""
                src={props.product.coverImage}
            ></img>
            <p className="px-8 py-2 capitalize">
                {props.product.duration}
                <span className=" float-right text-orange-400 font-permanentmarker">
                    {props.product.price}
                </span>
            </p>
            <h2 className="pl-8 py-2 text-2xl font-semibold">
                {props.product.name}
            </h2>
            <p className="pl-8 py-2 capitalize">{`> ${props.actionText}`}</p>
        </div>
    );
};

export default ProductItem;
