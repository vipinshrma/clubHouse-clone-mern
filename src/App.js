import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import Navigation from "./components/navigation/Navigation";
import Login from "./pages/Login/Login";
function App() {
	return (
		<>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</>
	);
}

export default App;
