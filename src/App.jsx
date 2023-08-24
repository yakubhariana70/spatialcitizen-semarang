//|| PAGES
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Storytelling from "./pages/Storytelling/Storytelling";
import About from "./pages/About/About";

//|| LIBRARY
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// || STYLE
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/spatialcitizen-semarang">
        <Routes>
          <Route exact path="/spatialcitizen-semarang" element={<Home />} />
          <Route path="/storytelling" element={<Storytelling />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
