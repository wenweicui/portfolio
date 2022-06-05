import React, { WheelEvent } from "react";
import introImg from "./assets/images/intro.png";
import SideNav from "./components/SideNav";
import ScrollBody from "./components/ScrollBody";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ImageSection from "./components/ImageSection";
import OutroSection from "./components/OutroSection";

function App() {
  const handleWheelEvent = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const scrollContainer = document.querySelector(
      "#app-container"
    ) as HTMLDivElement;
    scrollContainer.scrollLeft += event.deltaY;
  };

  return (
    <div className="App" id="app-container" onWheel={handleWheelEvent}>
      <SideNav />
      <ScrollBody>
        <IntroSection />
        <section>
          <img src={introImg} className="intro-img" alt="intro-bg" />
        </section>
        <ProjectsSection />
        <AboutSection />
        <ImageSection />
        <ContactSection />
        <OutroSection />
      </ScrollBody>
    </div>
  );
}

export default App;
