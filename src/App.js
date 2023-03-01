import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About"
// import Contact from "./components/Contact"
// import Blog from "./components/Blog"

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Blog" element={<Blog/>}/> */}
          </Routes>
        </Router>

    </div>
  );
}

export default App;
