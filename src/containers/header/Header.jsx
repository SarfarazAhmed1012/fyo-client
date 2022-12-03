import React from "react";
import people from "../../assets/people.png";
import sound from "../../assets/sound.png";
import ai from "../../assets/logo1.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="gpt3__header section__padding" id="#home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Remove Background Noise From Your Videos
      </h1>
      <p>
        Our <span style={{ color: "white" }}>AI Algorithm</span> will remove any
        type of background noise from your videos with a single click. Here's
        Proof!
      </p>
      <div className="gpt3__header-content__input">
        <div className="gpt3__header-content__input">
          <Link to="/upload-video">
            <button type="button">Upload Video</button>
          </Link>
        </div>
        {/* <div className="gpt3__header-content__input">
          <a href="#record-audio">
            <button type="button">Record Video</button>
          </a>
        </div> */}
        <div className="gpt3__header-content__input">
          <Link to="/record-audio">
            <button type="button">Record Audio</button>
          </Link>
        </div>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={sound} />
    </div>
  </div>
);

export default Header;
