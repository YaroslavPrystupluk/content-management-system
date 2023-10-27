import { lazy, Suspense } from 'react';
import { Await } from 'react-router-dom';

const Tabs = ({ tabs, tab }) => {
	const MyLazyComp = lazy(() => import(/* @vite-ignore */ `../${tab.path}`));

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={tab}>
					<MyLazyComp />
				</Await>
			</Suspense>
		</>
	);
};

export { Tabs };
