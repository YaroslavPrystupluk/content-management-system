import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Tabs from '../components/Tabs/Tabs';

const App = () => {
	const [tabs, setTabs] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch('tabs.json');

				if (!response.ok) {
					throw new Error('Помилка запиту');
				}
				const jsonTabs = await response.json();

				setTabs(jsonTabs);
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error('Помилка: ', error);
			}
		}

		fetchData();
	}, []);
	return (
		<Routes>
			<Route path="/:id/*" element={<Tabs tabs={tabs} />} />
		</Routes>
	);
};

export default App;
