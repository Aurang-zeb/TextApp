import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<About/>} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
