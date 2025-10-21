import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1, // current step (1=Profile, 2=Education, ...)
  profile: {
    fname: "",
    lname: "",
    phone: "",
    address: "",
    url: "",
  },
  education: [],
  skills: [],
  projects: [],
  socialMedia: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.step < 5) state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.education.splice(action.payload, 1);
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    deleteSkill: (state, action) => {
      state.skills.splice(action.payload, 1);
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.projects.splice(action.payload, 1);
    },
    addSocialMedia: (state, action) => {
      state.socialMedia.push(action.payload);
    },
  },
});

export const {
  nextStep,
  prevStep,
  updateProfile,
  addEducation,
  deleteEducation,
  addSkill,
  deleteSkill,
  addProject,
  deleteProject,
  addSocialMedia,
} = resumeSlice.actions;

export default resumeSlice.reducer;
