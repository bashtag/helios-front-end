import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import NotFound from "../common/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div>
			<Container>
				<Navi />
				<Routes>
					<Route index element={<Dashboard />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
