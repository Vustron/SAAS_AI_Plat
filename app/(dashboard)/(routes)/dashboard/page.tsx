import { UserButton } from '@clerk/nextjs';

const DashboardPage = () => {
	return (
		<div>
			<p>DashboardPage (Protected)</p>
			<UserButton afterSignOutUrl='/' />
		</div>
	);
};

export default DashboardPage;
