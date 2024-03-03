import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import CatalogWithCategories from "./components/catalogWithCategories/CatalogWithCategories";
import HomeCategoriesSection from "./components/homeCategoriesSection/HomeCategoriesSection";
import HomeWithNew from "./components/homeWithNew/HomeWithNew";
import Footer from "./components/footer/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <>
      <Header />
      <div className=" bg-violet-100 w-full min-h-screen">
        <CatalogWithCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <HomeCategoriesSection setSelectedCategory={setSelectedCategory} />
        <HomeWithNew />
      </div>
      <Footer />
    </>
  );
}

export default App;
