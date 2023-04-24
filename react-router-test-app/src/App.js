import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Empresa from './Empresa';
import Contato from './Contato';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="contato">Contato</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route exact path="/" element={
            <Home />}>
          </Route>
          <Route path="/empresa" element={<Empresa />}>
          </Route>
          <Route path="/contato" element={<Contato />}> 
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
