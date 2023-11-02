import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Layout, tabLoader } from '../components/Layout';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(<Route path="/*" element={<Layout />} loader={tabLoader} />),
	);

	return <RouterProvider router={router} />;
};

export default App;
