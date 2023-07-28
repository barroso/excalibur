import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/not-found";
import Board from "./pages/board";
import About from "./pages/about";
import Header from "./components/header";
  
const App = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path="/" element={<Board />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;