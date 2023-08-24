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
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/storytelling" element={<Storytelling />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
