import hoverEffect from "hover-effect";
import { useEffect } from "react";
import {
  bg1,
  champAhri,
  champAshe,
  champGaren,
  distortion,
} from "../../../assets/images";
import { Button } from "../../button/Button";
import HomeSection from "../HomeSection";
import "./welcome.scss";

const champImgs = [champAshe, champAhri, champGaren];

const Welcome = (props) => {
  useEffect(() => {
    const welcomeImgs = document.querySelectorAll("#welcome-silde > img");
    let animates = [];
    welcomeImgs.forEach((item, index) => {
      let nextImg =
        welcomeImgs[
          index === welcomeImgs.length - 1 ? 0 : index + 1
        ].getAttribute("src");
      let animation = new hoverEffect({
        parent: document.querySelector("#welcome-silde"),
        intensity: 0.5,
        image1: item.getAttribute("src"),
        image2: nextImg,
        displacementImage: distortion,
        hover: false,
      });
      animates.push(animation);
    });
    welcomeImgs.forEach((e) => e.remove());

    let currItem = 0;

    const autoImageSlide = () => {
      let prevItem = currItem;
      currItem = (currItem + 1) % animates.length;

      if (!document.hidden) {
        animates[prevItem].next();
      }

      setTimeout(() => {
        let canvas = document.querySelectorAll("#welcome-silde > canvas");
        document.querySelector("#welcome-silde").appendChild(canvas[0]);
        animates[prevItem].previous();
      }, 3000);
    };

    setInterval(autoImageSlide, 3000);
  }, []);

  return (
    <HomeSection
      className={`welcome ${props.isActive ? "active" : ""}`}
      contentClassName="overlay welcome-content"
      bgImage={bg1}
    >
      <div className="welcome-info relative">
        <div className="welcome-box">
          <div className="title">
            <span>Welcome To</span>
            <h2 className="main-color">Summoner's Rift</h2>
          </div>
          <div className="description mt-4">
            Team up with friends and test your skills in 5v5 MOBA combat. All
            the high-skill competition you crave, designed especially for mobile
            and console with revamped controls and streamlined matches.Explore
            the living universe of Runeterra through lore, comics, games, and
            more. Then dive into the community of gamers, cosplayers, musicians,
            and content creators who are waiting for you to join them.
          </div>
          <div className="btns mt-4">
            <Button className="btn-main">PLAY NOW</Button>
            <Button className="btn-second">GET STARTED</Button>
          </div>
        </div>
      </div>
      <div className="welcome-img relative">
        <div className="welcome-slide" id="welcome-silde">
          {champImgs.map((item, index) => (
            <img src={item} key={index} />
          ))}
        </div>
      </div>
    </HomeSection>
  );
};

export default Welcome;
