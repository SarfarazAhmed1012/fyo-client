import React from "react";
import "./blog.css";
import { Article } from "../../components";
import blog01 from "../../assets/dhul.jpg";
import blog02 from "../../assets/fasting.jpg";
import blog03 from "../../assets/ramadaan.png";
import blog04 from "../../assets/arab.jpg";
import blog05 from "../../assets/pray.jpg";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Register Today & <br /> start exploring Islam.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            style={{ width: "100px" }}
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="7 Ways to Make Allah Please in first 10 Days of Dhul Hajjah"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            text="Fasting in Shawwal- Significance & Virtues"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            text="5 Significant Practices for the Last Ten Days of Ramadan"
          />
          {/* <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="Significance of Hajj (Pilgrimage) in Quran & Sunnah- The Fifth Pillar of Islam"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            text="Facts About Prophet Muhammad (SAW) Muslims Should Spread"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
