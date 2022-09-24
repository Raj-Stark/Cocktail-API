import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/cocktail/:id"
          element={<SingleCocktail></SingleCocktail>}
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
