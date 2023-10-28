import { Suspense } from 'react';
import { Link, Route, Routes, defer, useLoaderData, Await } from 'react-router-dom';
import { Tabs } from './Tabs';

const Nav = () => {
	const { tabs } = useLoaderData();

	return (
		<nav>
			<h1>Content management system</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={tabs}>
					{(resolvedTabs) => (
						<>
							<ul>
								{resolvedTabs
									.sort((a, b) => a.order - b.order)
									.map((tab) => (
										<li key={tab.id}>
											<Link to={`/${tab.id}`}>{`${tab.title}`}</Link>
										</li>
									))}
							</ul>
							<Routes>
								{resolvedTabs.map((tab) => (
									<Route
										key={tab.id}
										path={`/${tab.id}/*`}
										element={<Tabs tab={tab} path={tab.path} />}
									/>
								))}
							</Routes>
						</>
					)}
				</Await>
			</Suspense>
		</nav>
	);
};

async function getTabs() {
	const res = await fetch('tabs.json');

	return res.json();
}

const tabsLoader = () => {
	return defer({ tabs: getTabs() });
};

// eslint-disable-next-line react-refresh/only-export-components
export { Nav, tabsLoader };
