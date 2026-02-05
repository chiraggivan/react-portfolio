import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioNavbar from "./components/navbar";
import StickyFooter from "./components/stickyFooter";
import Home from "./pages/home";
import About from "./pages/about";
import Backend from "./pages/backend";
import Frontend from "./pages/frontend";

function App() {
  return (
    <BrowserRouter>
      <StickyFooter>
        <PortfolioNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/backend" element={<Backend />} />
            <Route path="/frontend" element={<Frontend />} />

            <Route path="*" element={<div>404 – Page not found</div>} />
          </Routes>
        </main>
      </StickyFooter>
    </BrowserRouter>
  );
}

export default App;
