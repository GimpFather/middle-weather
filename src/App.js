import "./components/scss/index.scss";

import Navbar from "./components/js/Navbar";
import Hero from "./components/js/Hero";
import Footer from "./components/js/Footer";

function App() {
	return (
		<div class="red">
			<Navbar></Navbar>
			<Hero></Hero>
			<Footer></Footer>
		</div>
	);
}

export default App;
