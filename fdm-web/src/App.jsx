import { useState } from "react";
import "./App.css";
import MainPage from "./pages/mainPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar className="min-h-screen bg-white z-10"/>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
