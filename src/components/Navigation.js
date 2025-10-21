import React from "react";

const Navigation = ({ onNext, onBack, onSave }) => (
  <div>
    <button id="back" onClick={onBack}>
      Back
    </button>
    <button id="save_continue" onClick={onSave}>
      Save & Continue
    </button>
    <button id="next" onClick={onNext}>
      Next
    </button>
  </div>
);

export default Navigation;
