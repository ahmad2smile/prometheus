import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getJobsThunk } from "../../appState/jobs/fetchJobs";
import { selectJobs } from "../../appState/jobs/jobsSlice";

const Dashboard = () => {
	const dispatch = useDispatch();
	const jobs = useSelector(selectJobs);
	const [filter, setFilter] = useState({ search: "", location: "Bangkok" });

	useEffect(() => {
		dispatch(getJobsThunk(filter));
	}, [filter]);

	return (
		<div>
			<h3>Dashboard</h3>
			<p>Jobs: </p>
			{jobs.map(j => (
				<div>{j.id}</div>
			))}
		</div>
	);
};

export default Dashboard;
