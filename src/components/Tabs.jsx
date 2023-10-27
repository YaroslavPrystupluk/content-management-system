import { lazy, Suspense } from 'react';

const Tabs = ({ tab }) => {
	const MyLazyComp = lazy(() => import(/* @vite-ignore */ `../${tab.path}`));

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<MyLazyComp />
			</Suspense>
		</>
	);
};

export { Tabs };
