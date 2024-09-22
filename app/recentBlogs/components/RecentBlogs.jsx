import React from "react";
import "../css/recentBlogs.css";
import { blogList } from "../../../assets/blogList";
import BlogCard from "./BlogCard";

const RecentBlogs = () => {
  return (
    <div className="min-h-[40vh] recentBlogBg text-white">
      <div>Recent Blogs</div>
      <div>
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </div>
      <div className="flex gap-7">
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
