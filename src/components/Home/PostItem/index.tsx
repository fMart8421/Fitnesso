import React, { useState } from "react";
import { Post } from "../../../models/Post";

const PostItem: React.FC<{ post: Post }> = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div
            onMouseEnter={() => {
                setIsHovering(true);
            }}
            onMouseLeave={() => {
                setIsHovering(false);
            }}
            className="rounded-xl px-8 py-8 flex flex-col-reverse h-[600px] mt-16 relative z-0 cursor-pointer hover:-translate-y-1 transition duration-300 group"
        >
            <img
                alt=""
                src={props.post.backgroundImage}
                className="absolute w-full h-full top-0 left-0 object-cover rounded-xl -z-10 "
            ></img>
            <div className="bg-white rounded-lg mt-3 px-6 py-4">
                <div className=" flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary"></div>
                    <p className=" pl-4">{props.post.user.name}</p>
                </div>
                <h1 className="text-2xl font-semibold my-2 font-sans">
                    {props.post.title}
                </h1>
                <p className="my-2 group-hover:translate-x-2 transition duration-300">
                    <span>{`>`}</span> Read More
                </p>
            </div>
            <div className="bg-primary-lighter self-start text-xs px-1 py-1.5 rounded uppercase">
                {props.post.tag}
            </div>
            <div
                className={`absolute top-0 left-0 w-full h-full z-10 transition duration-500 ${
                    isHovering && "bg-white/40"
                } duration-200`}
            ></div>
        </div>
    );
};

export default PostItem;
