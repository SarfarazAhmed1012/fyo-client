import React from "react";
import "./videoupload.css";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import axios from "axios";
import { useState } from "react";
import video from "E:/toil/client/src/assets/clip1.mp4";

const VideoUpload = ({ title, text }) => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [audioSrc, setAudioSrc] = useState(null);
  const [show, setShow] = useState(false);
  const ffmpeg = createFFmpeg({
    mainName: "main",
    corePath: "https://unpkg.com/@ffmpeg/core-st@0.11.1/dist/ffmpeg-core.js",
    log: true,
  });

  const handleChange = (event) => {
    const file = event.target.files[0];
    setVideoSrc(file);
  };

  //file uplaod in a folder
  const onSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/uploadVideo";
    const data = new FormData();
    data.append("file", videoSrc);
    data.append("fileName", videoSrc.name);

    axios.post(url, data).then((e) => {
      console.log("success");
    });

    alert("video uploaded successfully");
  };

  //this is the work for converting the mp3 to mp4 files
  const convertToAudio = async () => {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }

    ffmpeg.FS("writeFile", "test.mp4", await fetchFile(videoSrc));
    await ffmpeg.run("-i", "test.mp4", "output.wav");
    const data = ffmpeg.FS("readFile", "output.wav");
    setAudioSrc(
      URL.createObjectURL(new Blob([data.buffer], { type: "audio/wav" }))
    );
  };

  const denoiseVideo = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/denoise-video";
    axios.post(url).then((e) => {
      console.log("successfull");
    });
  };
  return (
    <>
      <div>
        <div className="gpt3__features-container__feature">
          <div className="gpt3__features-container__feature-title">
            <div />
            <h1>Select your video file:</h1>
          </div>
          <div className="gpt3__features-container__feature-text">
            <form
              method="post"
              action="#"
              id="#"
              // onSubmit={onSubmit}
              className="form-group"
            >
              <input
                type="file"
                className="form-control"
                id="media-URL"
                accept="video/mp4,video/x-m4v,video/*,.mkv"
                // onChange={(event) => {
                //   handleChange(event);
                // }}
              />
              <button className="submitbtn"> Submit </button>
              <button className="submitbtn"> Denoise </button>
            </form>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default VideoUpload;
