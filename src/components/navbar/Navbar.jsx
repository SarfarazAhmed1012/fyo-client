import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/sound.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Sample from "../signup/SignUpModal";
import SignUp from "../signup/SignUpModal";
import SignUpModal from "../signup/SignUpModal";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const handleCloseSignUp = () => setShow(false);
  const handleShowSignUp = () => setShow(true);
  const handleShowSignIn = () => setShow(true);
  let modal;
  if (handleShowSignIn) {
    modal = <SignUpModal text="Sign In" />;
  } else if (handleShowSignUp) {
    modal = <SignUpModal text="Sign Up" />;
  }

  return (
    // <div className="gpt3__navbar">
    //   <div className="gpt__navbar-links">
    //     <div className="gpt3__navbar-links_logo">
    //       <img src={logo} alt="logo" />
    //     </div>
    //     <div className="gpt3__navbar-links_container">
    //       <p>
    //         <a href="#home">Home</a>
    //       </p>
    //       <p>
    //         <a href="#home">What is Quran?</a>
    //       </p>
    //       <p>
    //         <a href="#home">About us</a>
    //       </p>
    //       <p>
    //         <a href="#home">Contact us</a>
    //       </p>
    //     </div>
    //   </div>
    //   <div className="gpt_3_navbar-sign">
    //     <p>Sign in</p>
    //     <button type="button">Sign up</button>
    //   </div>
    // </div>
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>

          <p>
            <a href="#whgpt3">What is NOICE•REDS?</a>
          </p>
          <p>
            <Link to="/upload-video">
              <a>Denoise Video</a>
            </Link>
          </p>
          <p>
            <Link to="/record-audio">
              <a>Denoise Audio</a>
            </Link>
          </p>

          <p>
            <a href="#blog">About Us</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        {/* <p onClick={handleShowSignIn}>Contact us</p> */}
        <button type="button" onClick={handleShowSignUp}>
          Contact us
        </button>

        <Modal show={show} onHide={handleCloseSignUp}>
          {/* {modal} */}
          {handleShowSignIn ? (
            <SignUpModal text="sign inn" />
          ) : (
            <SignUpModal text="sign up" />
          )}
        </Modal>
      </div>
      <div className="gpt3__navbar-menu">
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is NOICE•REDS?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
              <div className="gpt3__navbar-menu_container-links-sign">
                <button type="button">Contact us</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
