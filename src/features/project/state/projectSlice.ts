import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../../app/store";
import { RootState } from "../../../app/store";
import { Project } from "../api/types";

interface ProjectState {
  projects: Project[];
  isLoading: boolean;
  error: string;
}

const initialState: ProjectState = {
  projects: [
    {
      name: "Проект1",
      startDate: "2020-01-01",
      endDate: "2020-01-12",
      manager: "Иван",
      administrator: "Павел",
    },
    {
      name: "Проект 2",
      startDate: "2020-01-01",
      endDate: "2020-01-12",
      manager: "Иван",
      administrator: "Павел",
    },
  ],
  isLoading: false,
  error: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setAddProject(state) {
      state.isLoading = true;
    },
    setSuccessAddProject(state, action) {
      const newProjects = state.projects.slice();
      state.projects = [...newProjects, action.payload];
      state.isLoading = false;
    },
  },
});

const { setAddProject } = projectSlice.actions;
const { setSuccessAddProject } = projectSlice.actions;
export const selectProjects = (state: RootState) => state.project.projects;
export const selectIsLoading = (state: RootState) => state.project.isLoading;

export const addProject = (project: Project): AppThunk => async (dispatch) => {
  //TODO
  dispatch(setAddProject());
  dispatch(setSuccessAddProject(project));
};

export default projectSlice.reducer;
