import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbar3 from "./components/Navbar3";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar3 />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
};

export default App;
