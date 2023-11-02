import { lazy, Suspense, useState, useEffect } from 'react';
import { Await } from 'react-router-dom';

const Tab = ({ tab, tabs }) => {
	const initialTab = tabs.find((t) => t.order === 0);
	const defaultPath = initialTab ? `../${initialTab.path}` : '';
	const pathLocalStorage = localStorage.getItem('path');
	const initialPath = pathLocalStorage || defaultPath;
	const [path, setPath] = useState(initialPath);

	useEffect(() => {
		setPath(`../${tab.path}`);
		localStorage.setItem('path', path);
	}, [tab, path]);

	const MyTabs = lazy(() => import(/* @vite-ignore */ path));

	return (
		<>
			<h1>{tab.title}</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={tab}>
					<MyTabs />
				</Await>
			</Suspense>
		</>
	);
};

export { Tab };
