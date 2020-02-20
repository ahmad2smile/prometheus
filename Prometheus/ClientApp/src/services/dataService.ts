import axios, { Canceler } from "axios";
import { Job } from "../appState/jobs/Job";
import { JobFilter } from "../appState/jobs/JobFilter";

const appBaseUrl = "/api";

export const restApi = axios.create({
	baseURL: appBaseUrl,
	timeout: 30000
});

export const apiErrorHandler = (error: any) => {
	if (axios.isCancel(error)) {
		if (process.env.NODE_ENV === "development") {
			// tslint:disable-next-line: no-console
			console.error("Request canceled", error.message);
		}

		return "";
	} else {
		const message =
			error.response?.message ||
			error.message ||
			"Something went wrong. Please try again!";

		return message;
	}
};

let getJobsCancel: Canceler;

export const getJobs = async (filter: JobFilter): Promise<Array<Job>> => {
	// cancel previous requests
	if (getJobsCancel) {
		getJobsCancel();
	}

	const response = await restApi.get(
		`/jobs?search=${filter.search}&location=${filter.location}`,
		{
			cancelToken: new axios.CancelToken(c => (getJobsCancel = c))
		}
	);

	return response.data;
};
