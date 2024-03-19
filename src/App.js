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

function App() {
  const [filters, setFilters] = useState({
    isNew: undefined,
    discount: undefined,
    category: "All",
    color: "Any",
    page: 1,
    size: 12,
  });
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({ login: "emptyUser" });

  useEffect(() => {
    document.title = "Stickers Shop";
  }, []);

  const setOptions = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

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
        <Header setOptions={setOptions} user={user} />
        <div className=" bg-[url('https://i.pinimg.com/originals/53/3e/20/533e20a09f7427f953694157876f976f.jpg')] bg-contain w-full min-h-screen">
          <Routes>
            <Route
              path="/catalog"
              element={
                <CatalogWithCategories
                  filters={filters}
                  setOptions={setOptions}
                  addCartItem={addCartItem}
                />
              }
            />
            <Route
              path="/"
              element={
                <>
                  <HomeCategoriesSection setOptions={setOptions} />
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
