
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Root from './routes/Root';
import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import Galeria from "./pages/Galeria";
import Unbox from "./pages/Unbox";

function App() {
  return (
    <Router >
      <div className="bg-dark10">

        <Root></Root>
        
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jogos" element={<Jogos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/unbox" element={<Unbox />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
