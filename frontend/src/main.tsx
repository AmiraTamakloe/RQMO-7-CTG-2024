import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from '@src/App';
import { SaasProvider } from '@saas-ui/react';

import theme from '@src/Theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Activities from '@src/pages/Activities';
import Contact from '@src/pages/Contact';
import Help from '@src/pages/Help';
import Home from '@src/pages/Home';
import Services from '@src/pages/Services';
import Game from '@src/pages/Game';

const router = createBrowserRouter([
	{
		path: '/RQMO-7-CTG-2024/',
		element: <App />,
		children: [
			{
				path: '/RQMO-7-CTG-2024/',
				element: <Home />,
			},
			{
				path: '/RQMO-7-CTG-2024/home',
				element: <Home />,
			},
			{
				path: '/RQMO-7-CTG-2024/game',
				element: <Game />,
			},
			{
				path: '/RQMO-7-CTG-2024/help',
				element: <Help />,
			},
			{
				path: '/RQMO-7-CTG-2024/activities',
				element: <Activities />,
			},
			{
				path: '/RQMO-7-CTG-2024/services',
				element: <Services />,
			},
			{
				path: '/RQMO-7-CTG-2024/contact',
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<SaasProvider theme={theme}>
			<RouterProvider router={router} />
		</SaasProvider>
	</React.StrictMode>,
);
