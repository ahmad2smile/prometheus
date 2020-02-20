import { AppThunk } from "../rootReducer";
import { JobFilter } from "./JobFilter";

import { getJobs, apiErrorHandler } from "../../services/dataService";
import { getJobsStart, getJobsSuccess, getJobsFailure } from "./jobsSlice";

export const getJobsThunk = (filter: JobFilter): AppThunk => async dispatch => {
	try {
		dispatch(getJobsStart());

		const jobs = await getJobs(filter);

		dispatch(getJobsSuccess(jobs));
	} catch (err) {
		dispatch(getJobsFailure(apiErrorHandler(err)));
	}
};
