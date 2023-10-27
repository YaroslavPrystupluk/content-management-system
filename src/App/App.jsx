import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Nav, tabsLoader } from '../components/Nav';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(<Route path="*" element={<Nav />} loader={tabsLoader} />),
	);

	return <RouterProvider router={router} />;
};

export default App;
