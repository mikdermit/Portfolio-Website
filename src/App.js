import { Routes, Route } from "react-router-dom";
import "./styles/tailwind.css"
import NavBar from "./components/common/NavBar"
import Home from "./components/Home"
import Projects from "./components/projects/Projects"
import Resources from "./components/resources/Resources"
import Contact from "./components/contact"

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app-routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
