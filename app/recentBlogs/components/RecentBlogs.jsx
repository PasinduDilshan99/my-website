import React from "react";
import { blogList, blogDetails } from "../../../assets/blogList";
import BlogCard from "./BlogCard";
import "../css/recentBlogs.css";

const RecentBlogs = () => {
  return (
    <div className="flex flex-col gap-5 py-20 items-center recentBlogBg text-[--recent-blogs-text]">
      <div className="recentBlogTitle text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
        {blogDetails.title}
      </div>
      <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[--recent-blogs-text] max-w-[85%] text-center">
        {blogDetails.text}
      </div>
      <div className="flex gap-10 flex-wrap items-center justify-center">
        {blogList.map((blog) => (
          <div key={blog.id}>
            <BlogCard props={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
