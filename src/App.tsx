import React, { WheelEvent } from 'react';
import DOM from 'react-dom'
import introImg from './assets/images/intro.png';
import SideNav from './components/SideNav';
import ScrollBody from './components/ScrollBody';
import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  
  const handleWheelEvent = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const scrollContainer = (document.querySelector('#app-container') as HTMLDivElement);
    scrollContainer.scrollLeft += event.deltaY;
  };

  return (
    <div 
      className="App" 
      id="app-container"
      onWheel={handleWheelEvent}
    >
      <SideNav />
      <ScrollBody>
        <IntroSection />
        <section>
          <img src={introImg} className="intro-img" />  
        </section>
        <ProjectsSection />
      </ScrollBody>
    </div>
  );
}

export default App;
