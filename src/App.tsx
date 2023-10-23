import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/HomePage/Home";
import Cadillac from "./pages/Cars/CadillacPage/Cadillac";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cars/cadillac" element={<Cadillac />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
