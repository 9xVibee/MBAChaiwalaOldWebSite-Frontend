import IntroVideo from "./components/IntroVideo";
import Footer from "./components/Footer";
import Section from "./components/Section";
import FreshTopicImg from "./assests/academy.png";
import FreshTopicImg2 from "./assests/story.png";
import tedTalksImg from './assests/in-the-news.gif';
import FranchiseImg from './assests/franchise.gif';
import MapImg from './assests/locations.png';
import albumImg from './assests/mba-cares.gif';
import courseImg from './assests/image2.png';
import baratImg from './assests/image1.png';
import chaiwalaImg from './assests/image3.png';
import data from './data/data.json'
import Misc from "./components/Misc";

import './styles/mediaQuiry.scss'
import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import "./styles/misc.scss";
import { useEffect } from "react";

// $yellow : #fff100;
// $pink : #ed1e79;
// $red : #d20120;
// $brown : #6d3d0f;

const yellow = "#fff100",
  pink = "#ed1e79",
  brown = "#6d3d0f",
  white = "#fff";

function App() {
  const { freshTopic, freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala } = data
  const dotCusrsor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`
    cursor.style.left = `${e.pageX - 14}px`

    const element = e.target;
    if(element.getAttribute("data-cursorpointer")){
      cursor.classList.add("cursorHover");
    }
    else cursor.classList.remove("cursorHover")
    if(element.getAttribute("data-cursorpointermini")){
     cursor.classList.add("cursorHoverMin")
    }else cursor.classList.remove("cursorHoverMin")

  }
  useEffect (() => {
      window.addEventListener("mousemove",dotCusrsor)
      return() => {
        window.removeEventListener("mousemove",dotCusrsor)
      }
  })
  return (
    <>
      <IntroVideo />

      {/* {freshTopic} */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        hasBtn={true}
        btnTxt={freshTopic.btn}
        ImgSrc={FreshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* freshTopic2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        hasBtn={true}
        btnTxt={freshTopic2.btn}
        ImgSrc={FreshTopicImg2}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* tedtalks */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        hasBtn={true}
        btnTxt={tedTalks.btn}
        ImgSrc={tedTalksImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/* frenchise */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        hasBtn={true}
        btnTxt={franchise.btn}
        ImgSrc={FranchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      {/* Map */}
      <Section
        h3={map.heading}
        text={map.text}
        hasBtn={false}
        btnTxt={map.btn}
        ImgSrc={MapImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* courses */}
      <Section
        h3={courses.heading}
        text={courses.text}
        hasBtn={true}
        btnTxt={courses.btn}
        ImgSrc={courseImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/* album */}
      <Section
        h3={album.heading}
        text={album.text}
        hasBtn={true}
        btnTxt={album.btn}
        ImgSrc={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      {/* barat */}
      <Section
        h3={barat.heading}
        text={barat.text}
        hasBtn={true}
        btnTxt={barat.btn}
        ImgSrc={baratImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* chaiwala */}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        hasBtn={true}
        btnTxt={chaiwala.btn}
        ImgSrc={chaiwalaImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      <Footer />
      <Misc />
    </>
  );
}

export default App;
