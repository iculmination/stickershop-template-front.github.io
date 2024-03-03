import "./App.css";
import Header from "./components/Header";
import CatalogWithCategories from "./components/CatalogWithCategories";
function App() {
  return (
    <>
      <Header />
      <div className=" bg-gray-100 w-full h-screen">
        <CatalogWithCategories />
      </div>
    </>
  );
}

export default App;
