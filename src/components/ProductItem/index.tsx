import React, { useState } from "react";
import { Product } from "../../models/Product";

const ProductItem: React.FC<{
    product: Product;
    actionText: string;
    overlayColor?: string;
}> = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative rounded-xl bg-white pb-8 cursor-pointer hover:-translate-y-1 transition duration-300 z-0 group"
        >
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
            <p className="pl-8 py-2 capitalize group-hover:translate-x-2 transition duration-300">{`> ${props.actionText}`}</p>
            <div
                className={`absolute top-0 left-0 w-full h-full z-10 transition duration-500 ${
                    isHovering &&
                    (props.overlayColor ? props.overlayColor : "bg-white/40")
                } duration-200`}
            ></div>
        </div>
    );
};

export default ProductItem;
