import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
  education: [],
  skills: [],
  projects: [],
  socialMedia: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setSocialMedia: (state, action) => {
      state.socialMedia = action.payload;
    },
  },
});

export const {
  setProfile,
  setEducation,
  setSkills,
  setProjects,
  setSocialMedia,
} = resumeSlice.actions;
export default resumeSlice.reducer;
