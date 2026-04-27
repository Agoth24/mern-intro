import RecordList from "./components/RecordList";
import Record from "./components/Record";
import App from "./App";

export const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <RecordList />,
			},
		],
	},
	{
		path: "/edit/:id",
		element: <App />,
		children: [
			{
				path: "/edit/:id",
				element: <Record />,
			},
		],
	},
	{
		path: "/create",
		element: <App />,
		children: [
			{
				path: "/create",
				element: <Record />,
			},
		],
	},
];