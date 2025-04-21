import { Box, CssBaseline, CssVarsProvider, extendTheme } from "@mui/joy";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./containers/Home";

function App() {
	const theme = extendTheme({
		fontFamily: {
			display: "Minecraft",
			body: "Minecraft",
		},
	});

	return (
		(
			<div className="App">
					<title>CloudCraft</title>
					<CssVarsProvider
						disableTransitionOnChange
						theme={theme}>
						<CssBaseline />
						<Box
								sx={{
									minHeight: "100vh",
								}}>
								<main>
									<Home />
								</main>

								<footer className="footer mt-auto py-1" style={{
									color: "grey"
									}}>
										<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
											<span className="text-xs"><em>&copy; 2014-2025 CloudCraft. All rights reserved.</em> <em>Developed by <a href="https://dandabs.io" className="border-none hover:underline">Daniel Adams</a>.</em></span>
										</div>
									</footer>
							</Box>
					</CssVarsProvider>
			</div>
		)
	);
}

export default App;
