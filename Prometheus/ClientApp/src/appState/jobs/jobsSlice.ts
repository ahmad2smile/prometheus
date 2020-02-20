import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "../rootReducer";

import { Job } from "./Job";

export interface JobsState {
	jobs: Array<Job>;
	jobsRequestLoading: boolean;
	error: string;
}

const initialState: JobsState = {
	jobs: [],
	jobsRequestLoading: false,
	error: ""
};

const slice = createSlice({
	name: "jobsState",
	initialState,
	reducers: {
		getJobsStart: state => {
			state.jobsRequestLoading = true;
		},
		getJobsSuccess: (state, { payload }: PayloadAction<Array<Job>>) => {
			state.jobs = payload;
		},
		getJobsFailure: (state, { payload }: PayloadAction<string>) => {
			state.error = payload;
		}
	}
});

export const selectJobs = (state: AppState) => state.jobsState.jobs;

export const { getJobsStart, getJobsSuccess, getJobsFailure } = slice.actions;

export default slice.reducer;
