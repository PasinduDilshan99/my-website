import React from "react";
import "../css/recentBlogs.css";
import { blogList } from "../../../assets/blogList";
import BlogCard from "./BlogCard";
import "../css/recentBlogs.css";

const RecentBlogs = () => {
  return (
    <div className="flex flex-col gap-5 py-20 items-center recentBlogBg text-white">
      <div className="recentBlogTitle text-5xl font-bold">Recent Blogs</div>
      <div className="text-lg text-[--recent-blogs-text] max-w-[50%] text-center">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
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
