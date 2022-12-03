import React from "react";
import { Brand, VideoUpload, Navbar } from "../../components";
import "./feature.css";
import video from "E:/toil/client/src/assets/clip1.mp4";
import "E:/toil/client/src/containers/footer/footer.css";
import logo from "../../assets/sound.png";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import CustomModal from "../modal/Modal";
import { Button } from "antd/es/radio";
const Features = () => {
  const [modal, setModal] = useState(false);

  const selectModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Navbar />
      <section id="#features">
        <CustomModal displayModal={modal} closeModal={selectModal} />
        <div className="gpt3__features section__padding_features">
          <div className="gpt3__features-heading">
            <h1 className="gradient__text">
              Let's Remove Noise From Your Videos
            </h1>
            <p>
              Annoying background noise in your video? Have no fear! Make videos
              noise-free with a single click.
            </p>
            <div>
              <Button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  width: "170px",
                  margin: "20px",
                  // height: "40px",
                  // padding: "20px",
                  // textAlign: "center",
                  // paddingTop: "20px",
                }}
                onClick={() => selectModal()}
              >
                Check Spectograms
              </Button>
            </div>
          </div>

          <div className="gpt3__features-container">
            <VideoUpload />
          </div>
        </div>
      </section>
      <Brand />

      <div
        className="gpt3__footer-upload_section"
        style={{ padding: 100, height: 0 }}
      >
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={logo} alt="logo" />
            <p>Karachi, Pakistan. @2022 QuranRecite. All rights reserved.</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Oversons</p>
            <p>Facebook</p>
            <p>Linkedin</p>
            <p>Instagram</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>About us</h4>
            <p>What are we?</p>
            <p>Join us</p>
            <p>Find us</p>
            <p>Book your session</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>NOICE•REDS</h4>
            <p>Request a Reciter</p>
            <p>Found any problem?</p>
            <p>Want to know more?</p>
          </div>
        </div>

        <div className="gpt3__footer-copyright">
          <p>@2022 NOICE•REDS. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Features;
