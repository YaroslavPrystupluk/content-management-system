import React, { lazy, Suspense } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

const Tabs = ({ tabs }) => {
	const { tabId } = useParams();

	// eslint-disable-next-line no-console
	console.log(useParams());
	// eslint-disable-next-line no-console
	console.log(tabId);
	return (
		<nav>
			<ul>
				{tabs
					.sort((a, b) => a.order - b.order)
					.map((tab) => (
						<li key={tab.id}>
							<Link to={`/${tab.id}`}>{tab.title}</Link>
						</li>
					))}
			</ul>
			<Routes>
				{tabs.map((tab) => (
					<Route key={tab.id} path={`/${tab.id}`}>
						{tab.id === tabId ? lazy(() => import(`./${tab.path}`)) : null}
					</Route>
				))}
			</Routes>
		</nav>
	);
};

export default Tabs;
