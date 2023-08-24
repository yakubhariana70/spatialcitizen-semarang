//|| PAGES
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Storytelling from "./pages/Storytelling/Storytelling";
import About from "./pages/About/About";

//|| LIBRARY
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// || STYLE
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="spatialcitizen-semarang">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="spatialcitizen-semarang/storytelling" element={<Storytelling />} />
          <Route path="spatialcitizen-semarang/map" element={<Map />} />
          <Route path="spatialcitizen-semarang/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
