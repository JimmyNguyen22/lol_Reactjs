import "./credit.scss";
import { bgVideo } from "../../../assets/videos";
import React, { useEffect, useRef } from "react";
import { Button } from "../../button/Button";

const Credit = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
    const pauseVideo = () => {
      !document.hidden ? videoRef.current.play() : videoRef.current.pause();
    };

    document.addEventListener("webkitvisibilitychange", pauseVideo);
    return () => {
      document.removeEventListener("webkitvisibilitychange", pauseVideo);
    };
  }, []);

  return (
    <div className={`credit overlay ${props.isActive ? "active" : ""}`}>
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        loop={true}
        className="overlay"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="credit__content">
        <div className="title">
          <span>Start Your</span>
          <h2 className="main-color">LEGENDS</h2>
        </div>
        <div className="btns mt-4">
          <Button className="btn-main">PLAY NOW</Button>
          <Button className="btn-second">GET STARTED</Button>
        </div>
      </div>
    </div>
  );
};

export default Credit;
