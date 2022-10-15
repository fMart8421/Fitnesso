import React from "react";
import { Product } from "../../../models/Product";
import ProductItem from "../ProductItem";


const ProductList: React.FC<{ products: Product[], actionText: string, children?: React.ReactNode }> = (props) => {
    return <div className="grid grid-cols-3 gap-14 my-16">
        {props.products.map((product) =><ProductItem key={product.id} actionText={props.actionText} product={product} />)}
    </div>;
};

export default ProductList;
