import React from "react";
import "E:/toil/client/src/containers/footer/footer.css";
import logo from "../../assets/logo1.png";
import mic from "../../assets/mic.png";
import pause from "../../assets/stop.png";
import { Brand, Feature, Navbar } from "../../components";
import MicRecorder from "mic-recorder-to-mp3";
import axios from "axios";

// import sound from "../src/input/recording.wav";
// import sound1 from "../src/recording/denoised.wav";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      blob: null,
      isBlocked: false,
      blobURL: "",
    };
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        this.setState({ blob, blobURL, isRecording: false });
      })
      .catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        this.setState({ isBlocked: true });
      }
    );
  }

  // this function being called on
  Save = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/record";
    const data = new FormData();
    data.append("audio", this.state.blobURL);
    data.append("audio", this.state.blob, "recording.wav");

    axios.post(url, data).then((e) => {
      console.log("success");
    });

    alert("audio uploaded successfully");
  };

  denoise = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/denoised").then((res) => {
      if (res.ok) {
        return res.json;
      }
    });
  };

  denoised = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/denoise";
    axios.post(url).then((e) => {
      console.log("successfull");
    });
  };

  render() {
    return (
      <>
        <div className="gpt3__footer ">
          <Navbar />
          <div className="gpt3__footer">
            <div className="gpt3__footer-heading">
              <h1>Record your audio and denoise</h1>
            </div>
            <div className="gpt3__footer-heading">
              <div
                onClick={() => {
                  this.state.isRecording ? this.stop() : this.start();
                }}
              >
                {this.state.isRecording ? (
                  <img src={pause} className="btn btn--shockwave" />
                ) : (
                  <img src={mic} className="btn btn--shockwave is-active" />
                )}
              </div>
            </div>
            <div className="flex-container">
              <div className="flex-child magenta">
                <audio
                  src={this.state.blobURL}
                  controls="controls"
                  autoPlay
                  id="audio-element"
                />
              </div>

              <div className="flex-child green">
                <audio controls>
                  <source type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            </div>
            <div className="flex-container">
              <div className="flex-child magenta">
                <form
                  method="post"
                  action="#"
                  id="#"
                  onSubmit={this.Save}
                  className="form-group"
                >
                  <button className="button-33" style={{ color: "white" }}>
                    Save
                  </button>
                </form>
              </div>

              <div className="flex-child green">
                <form action="/denoise" method="POST" onSubmit={this.denoised}>
                  <button
                    type="submit"
                    className="button-33"
                    style={{ color: "white" }}
                  >
                    Denoise
                  </button>
                </form>
              </div>
            </div>

            <div className="gpt3__footer-links">
              <div className="gpt3__footer-links_logo">
                <img src={logo} alt="logo" />
                <p>Karachi, Pakistan. @2022 NOICE•REDS. All rights reserved.</p>
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
        </div>
      </>
    );
  }
}

export default Record;
