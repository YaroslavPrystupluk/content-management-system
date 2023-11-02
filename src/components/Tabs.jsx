import { Suspense } from 'react';
import { useLoaderData, Await, Route, Routes } from 'react-router-dom';
import { Tab } from './Tab';

const Tabs = () => {
	const { tabs } = useLoaderData();

	return (
		<div>
			<h1>work</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={tabs}>
					<Routes>
						{tabs.map((tab) => (
							<Route key={tab.id} path={`/${tab.id}/*`} element={<Tab tab={tab} />} />
						))}
					</Routes>
				</Await>
			</Suspense>
		</div>
	);
};

};

export { Tabs, tabLoader };
