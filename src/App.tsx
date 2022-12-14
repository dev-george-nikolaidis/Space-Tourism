// libraries
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// local
import Home from "./pages/home/Home";
import DestinationSingle from "./pages/dynamic/DestinationSingle";
import Crew from "./pages/dynamic/Crew";
import Technology from "./pages/dynamic/Technology";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/destination/:name" element={<DestinationSingle />} />
				<Route path="/crew/:name" element={<Crew />} />
				<Route path="/technology/:name" element={<Technology />} />

				{/* {customRoutes} */}
				<Route path="*" element={<div>Error</div>} />
			</Routes>
		</Router>
	);
};

export default App;
