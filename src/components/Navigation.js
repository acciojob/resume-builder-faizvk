import React from "react";

const Navigation = ({
  page,
  handleNext,
  handleBack,
  handleSave,
  disabledNext,
}) => {
  return (
    <div className="navigation-buttons" style={{ marginTop: "20px" }}>
      {page > 1 && (
        <button id="back" onClick={handleBack} style={{ marginRight: "10px" }}>
          Back
        </button>
      )}
      {page < 5 && (
        <button
          id="next"
          onClick={handleNext}
          style={{ marginRight: "10px" }}
          disabled={disabledNext}
        >
          Next
        </button>
      )}
      {page === 5 && (
        <button id="save_continue" onClick={handleSave}>
          Save
        </button>
      )}
    </div>
  );
};

export default Navigation;
