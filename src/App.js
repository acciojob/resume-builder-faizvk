import React, { useState } from "react";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import ResumeOutput from "./components/ResumeOutput";
import Navigation from "./components/Navigation";

function App() {
  const [page, setPage] = useState(1);
  const [canProceed, setCanProceed] = useState(false);

  const handleNext = () => canProceed && setPage((prev) => prev + 1);
  const handleBack = () => setPage((prev) => prev - 1);
  const handleSave = () => alert("Resume saved!");

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Profile onValidChange={setCanProceed} />;
      case 2:
        return <Education onValidChange={setCanProceed} />;
      case 3:
        return <Skills onValidChange={setCanProceed} />;
      case 4:
        return <Projects onValidChange={setCanProceed} />;
      case 5:
        return <SocialMedia onValidChange={setCanProceed} />;
      case 6:
        return <ResumeOutput />;
      default:
        return <Profile onValidChange={setCanProceed} />;
    }
  };

  return (
    <div className="App">
      <h1>RESUME GENERATOR</h1>
      {renderPage()}
      {page <= 5 && (
        <Navigation
          page={page}
          handleNext={handleNext}
          handleBack={handleBack}
          handleSave={handleSave}
          disabledNext={!canProceed} // optional prop for disabling button
        />
      )}
    </div>
  );
}

export default App;
