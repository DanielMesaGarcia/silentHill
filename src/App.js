import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Games from "./pages/games/Games";
import Films from "./pages/films/Films";
import Merch from "./pages/merch/Merch";
import Next from "./pages/next/Next";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games" element={<Games />}/>
        <Route path="/films" element={<Films />}/>
        <Route path="/merch" element={<Merch />}/>
        <Route path="/next" element={<Next />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
