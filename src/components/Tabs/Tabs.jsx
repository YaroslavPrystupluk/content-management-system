import { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const loadComponent = (path) => lazy(() => import(/* @vite-ignore */ `./${path}`));

const Tabs = ({ tabs, tabId }) => {
	return (
		<nav>
			<ul>
				{tabs
					.sort((a, b) => a.order - b.order)
					.map((tab) => (
						<li key={tab.id}>
							<Link to={`/${tab.id}`}>{`${tab.title}`}</Link>
						</li>
					))}
			</ul>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					{tabs.map((tab) => (
						<Route key={tab.id} path={`/${tab.id}`}>
							{tab.id === tabId ? loadComponent(tab.path) : null}
						</Route>
					))}
				</Routes>
			</Suspense>
		</nav>
	);
};

export default Tabs;
