import { Suspense, useEffect } from 'react';
import {
	Outlet,
	useLoaderData,
	Await,
	Route,
	Routes,
	useNavigate,
	useLocation,
	NavLink,
} from 'react-router-dom';
import { Tab } from './Tab';

const Layout = () => {
	const { tabs } = useLoaderData();
	const navigate = useNavigate();
	const location = useLocation();
	const initialTab = tabs.find((t) => t.order === 0);

	useEffect(() => {
		const currentTabId = location.pathname.replace('/', '');

		if (currentTabId) {
			navigate(`/${currentTabId}`);
		} else if (initialTab) {
			navigate(`/${initialTab.id}`);
		}
	}, []);

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
										<NavLink to={`/${tab.id}`}>{`${tab.title}`}</NavLink>
									</li>
								))}
						</ul>
					</Await>
				</Suspense>
			</nav>
			<Routes>
				{tabs.map((tab) => (
					<Route key={tab.id} path={`/${tab.id}/*`} element={<Tab tab={tab} />} />
				))}
			</Routes>

			<Outlet />
		</>
	);
};

export { Layout };
