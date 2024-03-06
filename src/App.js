import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import CatalogWithCategories from "./components/catalogWithCategories/CatalogWithCategories";
import HomeCategoriesSection from "./components/homeCategoriesSection/HomeCategoriesSection";
import HomeWithNew from "./components/homeWithNew/HomeWithNew";
import Footer from "./components/footer/Footer";
import SingleGood from "./components/singleItem/SingleItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Cart from "./components/cart/Cart";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  useEffect(() => {
    document.title = "Stickers Shop";
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header setSelectedCategory={setSelectedCategory} />
        <div className=" bg-violet-100 w-full min-h-screen">
          <Routes>
            <Route
              path="/catalog"
              element={
                <CatalogWithCategories
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />
            <Route
              path="/"
              element={
                <>
                  <HomeCategoriesSection
                    setSelectedCategory={setSelectedCategory}
                  />
                  <HomeWithNew />
                </>
              }
            />
            <Route path="/item/:itemId" element={<SingleGood />} />
            <Route path="/auth/:auth" element={<Auth />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
