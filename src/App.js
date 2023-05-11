import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Games from "./pages/games/Games";
import Films from "./pages/films/Films";
import Merch from "./pages/merch/Merch";
import Next from "./pages/next/Next";
import Rss from "./pages/rss/Rss";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/games" element={<Games />}/>
        <Route path="/films" element={<Films />}/>
        <Route path="/merch" element={<Merch />}/>
        <Route path="/next" element={<Next />}/>
        <Route path="/rss" element={<Rss />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
