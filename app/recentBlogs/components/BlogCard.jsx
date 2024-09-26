import React from "react";
import blog from "../../../assets/images/blog.png";
import Image from "next/image";

const BlogCard = ({ props }) => {
  return (
    <div className="w-[320px] rounded-lg h-[300px] relative hover:scale-105">
      <div className="">
        <Image
          src={blog}
          alt="image"
          className="opacity-40 hover:opacity-100  transition-all duration-300 ease-out rounded-xl hover:shadow-md hover:shadow-[--recent-blogs-card-shadow-hover] "
        />
        <div className="absolute recentBlogTagCard top-0 p-2 rounded-full m-2 min-w-[20%] text-center text-sm md:text-md lg:text-lg xl:text-xl">
          {props.tag}
        </div>
        <div className="absolute bottom-[10%] width-[80%] flex flex-col rounded-3xl items-center w-full recentBlogCard py-3 px-3 text-md md:text-lg lg:text-xl xl:text-2xl">
          <div className="flex text-[--recent-blogs-card-text] font-semibold space-x-2">
            <div className="">{props.date}</div>
            <div>{props.comments}</div>
          </div>
          <div className=" font-bold">{props.title}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
