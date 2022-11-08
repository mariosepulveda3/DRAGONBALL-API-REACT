import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";
import CharacterInfo from "./pages/CharacterInfo";
import Notfound from "./pages/NotFound";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
      <Routes path="">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters">
          <Route index element={<Characters />} />
          <Route path="name" element={<CharacterInfo />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
