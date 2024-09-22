import React from "react";

const BlogCard = ({ props }) => {
  return (
    <div className="bg-black w-[320px] rounded-lg h-[300px] relative">
      <div>
        <div className="absolute">{props.tag}</div>
        <div className="absolute bottom-[10%] flex  flex-col items-center w-full bg-blue-400 ">
          <div className="flex">
            <div>{props.date}</div>
            <div>{props.comments}</div>
          </div>
          <div>{props.title}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
