import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div>
			<div>
				<Link to="/admin/oldDashboard">Old Hompage</Link>
			</div>
			<br />
			<br />
			<div>
				<a
					href="https://analytics.google.com/analytics"
					target="_blank"
					rel="noopener noreferrer"
				>
					구글 애널리틱스
				</a>
			</div>
		</div>
	);
};

export default Dashboard;
