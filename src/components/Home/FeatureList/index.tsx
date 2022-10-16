import React from "react";
import { Feature } from "../../../models/Feature";
import FeatureItem from "../FeatureItem";

const FeatureList: React.FC<{ features: Feature[] }> = (props) => {
    return (
        <div className="grid grid-cols-2 gap-x-64 gap-y-32 justify-items-center mt-32">
            {props.features.map((feature) => (
                <FeatureItem key={feature.id} feature={feature} />
            ))}
        </div>
    );
};

export default FeatureList;
