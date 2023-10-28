import { lazy, Suspense } from 'react';
import { Await } from 'react-router-dom';

const Tabs = ({ tab }) => {
	const MyTabs = lazy(() => import(/* @vite-ignore */ `../${tab.path}`));

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={tab}>
					<MyTabs />
				</Await>
			</Suspense>
		</>
	);
};

export { Tabs };
