import React, { useEffect, useRef } from "react";

const CatalogWithCategories = () => {
  return (
    <section className="container w-full flex gap-6 pt-6">
      <Categories />
      <Catalog />
    </section>
  );
};

const Catalog = () => {
  return (
    <div className="bg-white w-full rounded-md p-6 ">
      <h2 className="text-xl mb-6">Catalog</h2>
      <div className="w-full gap-5 justify-center flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Categories = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  return (
    <div className="p-6 bg-white rounded-md w-1/4 pb-8">
      <h2 className="text-xl">Categories</h2>
      <div className="w-full bg-gray-100 p-4 flex flex-col justify-start items-start mt-6 rounded-md text-md min-h-80">
        <button
          ref={buttonRef}
          className="focus:outline-none cursor-pointer text p-2 rounded-md text-left pl-4 w-full text-[#728299] hover:opacity-50 transition duration-300 focus:bg-white focus:text-black"
        >
          Category
        </button>
        <button className="focus:outline-none cursor-pointer text p-2 rounded-md text-left pl-4 w-full text-[#728299] hover:opacity-50 transition duration-300 focus:bg-white focus:text-black">
          Category
        </button>
        <button className="focus:outline-none cursor-pointer text p-2 rounded-md text-left pl-4 w-full text-[#728299] hover:opacity-50 transition duration-300 focus:bg-white focus:text-black">
          Category
        </button>
        <button className="focus:outline-none cursor-pointer text p-2 rounded-md text-left pl-4 w-full text-[#728299] hover:opacity-50 transition duration-300 focus:bg-white focus:text-black">
          Category
        </button>
        <button className="focus:outline-none cursor-pointer text p-2 rounded-md text-left pl-4 w-full text-[#728299] hover:opacity-50 transition duration-300 focus:bg-white focus:text-black">
          Category
        </button>
      </div>
    </div>
  );
};

const Card = () => {
  return <div className="bg-gray-100 w-[23%] rounded-md h-72 flex flex-col">
    <div className=''>
        <img src="" alt="" className="" />
    </div>
        <p className='text-lg font-bold'></p>
  </div>;
};

export default CatalogWithCategories;
