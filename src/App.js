import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import ResumeOutput from "./components/ResumeOutput";
import Navigation from "./components/Navigation";

const App = () => {
  const [page, setPage] = useState(1);

  const handleNext = () => setPage((p) => Math.min(p + 1, 6));
  const handleBack = () => setPage((p) => Math.max(p - 1, 1));
  const handleSave = () => {}; // Save action already happens inside each section

  return (
    <Provider store={store}>
      <div>
        {page === 1 && <Profile />}
        {page === 2 && <Education />}
        {page === 3 && <Skills />}
        {page === 4 && <Projects />}
        {page === 5 && <SocialMedia />}
        {page === 6 && <ResumeOutput />}
        {page < 6 && (
          <Navigation
            onNext={handleNext}
            onBack={handleBack}
            onSave={handleSave}
          />
        )}
      </div>
    </Provider>
  );
};

export default App;
