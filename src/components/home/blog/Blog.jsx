import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React from "react";

const Blog = () => {
  const Blogdata = [
    {
      id: 1,
      date: "26 FEB, 2019",
      title: "The Most Popular New top Business Apps",
      cover: "./assets/blog/blog1.jpg",
      category: "Technology",
    },
    {
      id: 2,
      date: "27 FEB, 2019",
      title: "The Best Marketing top Management Tools",
      cover: "./assets/blog/blog2.jpg",
      category: "Agency",
    },
    {
      id: 3,
      date: "28 FEB, 2019",
      title: "3 WooCommerce Plugins to Boost Sales",
      cover: "./assets/blog/blog3.jpg",
      category: "IT",
    },
  ];
  return (
    <>
      <section className="blog services">
        <div className="container topMargin">
          <div className="heading">
            <h3>LATEST BLOG</h3>
            <h1>READ INSPIRATIONAL STORY EVERY WEEK</h1>
          </div>

          <div className="container grid topMargin">
            {Blogdata.map((val) => {
              return (
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>

                  <div className="text">
                    <span>{val.date}</span>
                    <h3>{val.title}</h3>
                    <a href="/">Read More</a>
                    <KeyboardDoubleArrowRightIcon className="icon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
