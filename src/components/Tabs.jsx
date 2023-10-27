import { Suspense, lazy } from 'react';
import { useLoaderData } from 'react-router-dom';

const Tabs = () => {
	const { tab, id } = useLoaderData();
	const loadComponent = lazy(() => import(/* @vite-ignore */ `./${tab.path}`));

	console.log(loadComponent);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<loadComponent />
		</Suspense>
	);
};

async function getTab(id) {
	const res = await fetch('tabs.json');

	return res.json();
}

const tabLoader = async ({ params }) => {
	const id = params;

	return { tab: getTab(id), id };
};

// eslint-disable-next-line react-refresh/only-export-components
export { Tabs, tabLoader };
