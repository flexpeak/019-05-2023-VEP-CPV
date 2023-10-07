import { BrowserRouter, Routes, Route, Link }  from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div>
      <h1>Meu Site com Rotas</h1>
      <BrowserRouter>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/user/:id" element={<User/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
      </BrowserRouter>
    </div>
)}

export default App;
