import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../components/Layout';
import { tabsLoader } from '../loader/tabsLoader';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(<Route index element={<Layout />} loader={tabsLoader} />),
	);

	return <RouterProvider basename={import.meta.env.BASE_URL} router={router} />;
};

export default App;
