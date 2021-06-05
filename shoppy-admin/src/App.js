import "./App.scss";
import Chart from "./components/chart/Chart";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

function App() {
	return (
		<>
			<Topbar />
			<div className='container'>
				<Sidebar />
				<Home />
			</div>
		</>
	);
}

export default App;
