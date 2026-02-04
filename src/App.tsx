import "./App.css";
import PortfolioNavbar from "./components/navbar";
import StickyFooter from "./components/stickyFooter";

function App() {
  return (
    <StickyFooter>
      <PortfolioNavbar />
      <main className="container-fuild my-5 ms-5 ">
        <h1>Main content area</h1>
        <p>Your page content goes here...</p>
      </main>
    </StickyFooter>
  );
}

export default App;
