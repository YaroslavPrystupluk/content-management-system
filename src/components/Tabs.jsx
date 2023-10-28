import { lazy, Suspense, useState, useEffect } from 'react';
import { Await } from 'react-router-dom';

const Tabs = ({ tab }) => {
	const pathLocalStorage = localStorage.getItem('path');
	const initialPath = pathLocalStorage || `../${tab.path}`;
	const [path, setPath] = useState(initialPath);

	useEffect(() => {
		setPath(`../${tab.path}`);
		localStorage.setItem('path', path);
	}, [tab, path]);

	console.log(path);

	const MyTabs = lazy(() => import(/* @vite-ignore */ path));

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Await resolve={tab}>
				<MyTabs />
			</Await>
		</Suspense>
	);
};

export { Tabs };
