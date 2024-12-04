import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Golovna from "./Component/Golovna/Golovna.jsx";
import About from "./Component/Header/About/About.jsx";
import Products from "./Component/Header/Products/Products.jsx";
import Portfolio from "./Component/Header/Portfolio/Portfolio.jsx";
import Contact from "./Component/Header/Contact/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Golovna />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
