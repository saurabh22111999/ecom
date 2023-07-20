import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./modules/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:id" element={<Product />} />
        <Route path="/Products" element={<Products />} />
      </Routes>

      <Footer />
    </div>
  );
}
