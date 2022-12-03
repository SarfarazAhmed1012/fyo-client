import React from "react";
import "./brand.css";
import { google, slack, dropbox, atlassian, shopify } from "./imports";
import video from "E:/toil/client/src/assets/clip1.mp4";

const Brand = () => {
  return (
    <div className="gpt3__brand">
      <div className="video_cont">
        <h4 className="video_text">Original</h4>
        <video
          className="video"
          controls
          width={450}
          height={300}
          src={video}
        ></video>
      </div>
      <div className="video_cont">
        <h4 className="video_text">Denoised</h4>
        <video
          className="video"
          controls
          width={450}
          height={300}
          src={video}
        ></video>
      </div>
    </div>
  );
};

export default Brand;
