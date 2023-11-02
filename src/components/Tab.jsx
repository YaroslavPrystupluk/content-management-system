import { lazy, Suspense, useState, useEffect } from 'react';
import { Await } from 'react-router-dom';

const Tab = ({ tab }) => {
	const [path, setPath] = useState('');

	useEffect(() => {
		setPath(`../${tab.path}`);
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
