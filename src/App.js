import React from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import ResumeOutput from "./components/ResumeOutput";

function Steps() {
  const step = useSelector((state) => state.resume.step);

  switch (step) {
    case 1:
      return <Profile />;
    case 2:
      return <Education />;
    case 3:
      return <Skills />;
    case 4:
      return <Projects />;
    case 5:
      return <SocialMedia />;
    default:
      return <ResumeOutput />;
  }
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Steps />
      </div>
    </Provider>
  );
}

export default App;
