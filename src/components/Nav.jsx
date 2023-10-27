import { Link, useLoaderData } from 'react-router-dom';

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
		</nav>
	);
};

const tabsLoader = async () => {
	const res = await fetch('tabs.json');

	return res.json();
};

// eslint-disable-next-line react-refresh/only-export-components
export { Nav, tabsLoader };
