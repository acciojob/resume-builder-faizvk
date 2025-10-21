import React from "react";
import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "../redux/resumeSlice";

function Navigation({ showBack = true, showSave = false }) {
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "20px" }}>
      {showBack && (
        <button id="back" onClick={() => dispatch(prevStep())}>
          Back
        </button>
      )}
      {!showSave && (
        <button id="next" onClick={() => dispatch(nextStep())}>
          Next
        </button>
      )}
      {showSave && (
        <button id="save_continue" onClick={() => alert("Resume Saved!")}>
          Save & Continue
        </button>
      )}
    </div>
  );
}

export default Navigation;
