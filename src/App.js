import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import CatalogWithCategories from "./components/catalogWithCategories/CatalogWithCategories";
import HomeCategoriesSection from "./components/homeCategoriesSection/HomeCategoriesSection";
import HomeWithNew from "./components/homeWithNew/HomeWithNew";
import Footer from "./components/footer/Footer";
import SingleGood from "./components/singleGood/SingleGood";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Cart from "./components/cart/Cart";
import User from "./components/user/User";

import StickersApi from "./components/stickers/StickersApi";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({ login: "emptyUser" });

  useEffect(() => {
    document.title = "Stickers Shop";
    // setCartItems([
    //   {
    //     name: "test name",
    //     price: 5,
    //     size: "test size",
    //     id: 999,
    //     thumbnail:
    //       "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
    //     quantity: 999,
    //   },
    //   // COOKIE OR LOCALSTORAGE
    // ]);
  }, []);

  const addCartItem = (newItem) => {
    const existingItem = cartItems.find((item) => item.id === newItem.id);

    if (existingItem) {
      editCartItem(existingItem.id, existingItem.quantity + 1);
    } else {
      setCartItems((prevState) => [...prevState, { ...newItem, quantity: 1 }]);
    }
  };

  const removeCartItem = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove)
    );
  };

  const editCartItem = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <>
      <BrowserRouter>
        <Header setSelectedCategory={setSelectedCategory} user={user} />
        <div className=" bg-violet-100 w-full min-h-screen">
          <Routes>
            <Route
              path="/catalog"
              element={
                <CatalogWithCategories
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  addCartItem={addCartItem}
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
                  <HomeWithNew addCartItem={addCartItem} />
                </>
              }
            />
            <Route
              path="/item/:itemId"
              element={<SingleGood addCartItem={addCartItem} />}
            />
            <Route path="/auth" element={<Auth setUser={setUser} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  removeCartItem={removeCartItem}
                  editCartItem={editCartItem}
                />
              }
            />
            <Route path="/user/:userIdParams" element={<User user={user} />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
