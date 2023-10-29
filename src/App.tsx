import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/HomePage/Home";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import PricesPage from "./pages/PricesPage/PricesPage";
import Contacts from "./pages/ContactsPage/Contacts";
import Error from "./pages/404/Error";

// Services
import AirportTransfers from "./pages/Services/AirportTransfers/AirportTransfers";
import CorporateTravel from "./pages/Services/CorporateTravel/CorporateTravel";
import Nationwide from "./pages/Services/NationwideService/Nationwide";
import SpecialEvents from "./pages/Services/SpecialEvents/SpecialEvents";

// Cars
import CadillacEscalade from "./pages/Cars/CadillacPage/Cadillac";
import MercedesSClass from "./pages/Cars/MercedesSClass/Mercedes";
import BMW7 from "./pages/Cars/BMW7/Bmw7";
import MBSprinter from "./pages/Cars/MBSprinter/MBSprinter";
import FordExpedition from "./pages/Cars/FordExpedition/FordExpedition";
import CadillacCT6 from "./pages/Cars/CadillacCT6/CadillacCT6";

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cars/cadillac-escalade" element={<CadillacEscalade />} />
        <Route path="/cars/mercedes-s-class" element={<MercedesSClass />} />
        <Route path="/cars/bmw-7" element={<BMW7 />} />
        <Route path="/cars/mercedes-sprinter" element={<MBSprinter />} />
        <Route path="cars/ford-expedition" element={<FordExpedition />} />
        <Route path="cars/cadillac-ct6" element={<CadillacCT6 />} />
        <Route
          path="/services/airport-transfers"
          element={<AirportTransfers />}
        />
        <Route
          path="/services/corporate-travel"
          element={<CorporateTravel />}
        />
        <Route path="/services/nationwide" element={<Nationwide />} />
        <Route path="/services/special-events" element={<SpecialEvents />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
