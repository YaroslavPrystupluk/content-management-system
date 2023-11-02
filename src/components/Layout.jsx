import { Suspense } from 'react';
import { Link, Outlet, useLoaderData, Await, Route, Routes } from 'react-router-dom';
import { Tab } from './Tab';

const Layout = () => {
	const { tabs } = useLoaderData();

	return (
		<>
			<nav>
				<h1>Content management system</h1>
				<Suspense fallback={<div>Loading...</div>}>
					<Await resolve={tabs}>
						<ul>
							{tabs
								.sort((a, b) => a.order - b.order)
								.map((tab) => (
									<li key={tab.id}>
										<Link to={`/${tab.id}`}>{`${tab.title}`}</Link>
									</li>
								))}
						</ul>
						<Routes>
							{tabs.map((tab) => (
								<Route key={tab.id} path={`/${tab.id}/*`} element={<Tab tab={tab} tabs={tabs} />} />
							))}
						</Routes>
					</Await>
				</Suspense>
			</nav>
			<Outlet />
		</>
	);
};

const tabLoader = async () => {
	const res = await fetch('tabs.json');

	const tabs = await res.json();

	return { tabs };
};

export { Layout, tabLoader };
