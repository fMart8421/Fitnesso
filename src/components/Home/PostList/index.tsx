import React from "react";
import { Post } from "../../../models/Post";
import PostItem from "../PostItem";

const PostList:React.FC<{posts:Post[]}> = (props) => {
    return (
        <div className="grid grid-cols-3 gap-14">
            {props.posts.map((post)=><PostItem post={post} key={post.id} />)}
        </div>
    );
};

export default PostList;
