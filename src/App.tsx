import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioNavbar from "./components/navbar";
import StickyFooter from "./components/stickyFooter";
import Home from "./pages/home";
import About from "./pages/about";
import Backend from "./pages/backend";
import Frontend from "./pages/frontend";
import Projects from "./pages/projects";

function App() {
  return (
    <BrowserRouter>
      <StickyFooter>
        <PortfolioNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/react-portfolio/" element={<Home />} />
            <Route path="/react-portfolio/about" element={<About />} />
            <Route path="/react-portfolio/backend" element={<Backend />} />
            <Route path="/react-portfolio/frontend" element={<Frontend />} />
            <Route path="/react-portfolio/projects" element={<Projects />} />

            <Route path="*" element={<div>404 – Page not found</div>} />
          </Routes>
        </main>
      </StickyFooter>
    </BrowserRouter>
  );
}

export default App;
