import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
  education: [],
  skills: [],
  projects: [],
  social: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    saveProfile: (state, action) => {
      state.profile = action.payload;
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.education = state.education.filter((_, i) => i !== action.payload);
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    deleteSkill: (state, action) => {
      state.skills = state.skills.filter((_, i) => i !== action.payload);
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter((_, i) => i !== action.payload);
    },
    addSocial: (state, action) => {
      state.social.push(action.payload);
    },
  },
});

export const {
  saveProfile,
  addEducation,
  deleteEducation,
  addSkill,
  deleteSkill,
  addProject,
  deleteProject,
  addSocial,
} = resumeSlice.actions;

export default resumeSlice.reducer;
