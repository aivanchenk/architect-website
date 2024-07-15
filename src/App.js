import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./pages/main";
import Gallery from "./pages/gallery";
import Projects from "./pages/projects";
import Certificates from "./pages/certifacates";
import Contacts from "./pages/contacts";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
