import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { Nav, tabsLoader } from '../components/Nav';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="*" element={<Nav />} loader={tabsLoader}>
				<Route path=":id/*" element={<Tabs />} />
			</Route>,
		),
	);

	return <RouterProvider router={router} />;
};

export default App;
