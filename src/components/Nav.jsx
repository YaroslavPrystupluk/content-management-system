import { Link, Route, Routes, useLoaderData } from 'react-router-dom';
import { Tabs } from './Tabs';

const Nav = () => {
	const tabs = useLoaderData();

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
			<Routes>
				{tabs.map((tab) => (
					<Route key={tab.id} path={`/${tab.id}/*`} element={<Tabs tab={tab} path={tab.path} />} />
				))}
			</Routes>
		</nav>
	);
};

const tabsLoader = async () => {
	const res = await fetch('tabs.json');

	return res.json();
};

// eslint-disable-next-line react-refresh/only-export-components
export { Nav, tabsLoader };
