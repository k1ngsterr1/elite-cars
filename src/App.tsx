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
import PricesPage from "./pages/PricesPage/PricesPage";
import Contacts from "./pages/ContactsPage/Contacts";
import AirportTransfers from "./pages/Services/AirportTransfers/AirportTransfers";

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
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cars/cadillac" element={<Cadillac />} />
        <Route
          path="/services/airport-transfers"
          element={<AirportTransfers />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
