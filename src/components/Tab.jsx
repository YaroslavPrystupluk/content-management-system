import { lazy, Suspense } from 'react';

const Tab = ({ tab }) => {
	const MyTabs = lazy(() => import(`../${tab.path}`));

	return (
		<>
			<h1>{tab.title}</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<MyTabs />
			</Suspense>
		</>
	);
};

export default Tab;
