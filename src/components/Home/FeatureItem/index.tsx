import React from "react";
import { Feature } from "../../../models/Feature";

const FeatureItem: React.FC<{
feature:Feature
}> = (props) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[300px]">
                <img
                    className="w-full h-[300px] object-cover rounded-xl mb-4"
                    alt=""
                    src={props.feature.image}
                />
                <h2 className="text-3xl font-semibold my-4 text-center">
                    {props.feature.title}
                </h2>
            </div>
            <p className="text-center text-lg">
                {props.feature.description}
            </p>
        </div>
    );
};

export default FeatureItem;
