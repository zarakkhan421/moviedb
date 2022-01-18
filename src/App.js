import { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PopularMovies from "./Components/PopularMovies";
const theme = {
	colors: {
		primary: "#9F0039",
	},
};
function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Navbar />
				<PopularMovies />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
