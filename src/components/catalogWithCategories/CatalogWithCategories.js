import React, { useEffect, useState, useRef } from "react";
import CustomToast from "../customToast/CustomToast";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Link } from "react-router-dom";
import useStickersApi from "../stickers/StickersApi";
import spinnerSvg from "../ui/Spinner-1.9s-204px.svg";
import { Badge } from "../ui/badge";

const CatalogWithCategories = ({ filters, setOptions, addCartItem }) => {
  return (
    <section className="container w-full flex flex-col md:flex-row gap-6 pt-6 pb-6">
      <Categories filters={filters} setOptions={setOptions} />
      <Catalog
        filters={filters}
        addCartItem={addCartItem}
        setOptions={setOptions}
      />
    </section>
  );
};

const Catalog = ({ filters, addCartItem, setOptions }) => {
  const [stickers, setStickers] = useState({ stickers: [], count: 0 });
  const { loading, error, getAllStickers } = useStickersApi();
  const currentPages = Math.ceil(stickers.count / filters.size);
  useEffect(() => {
    getAllStickers(filters).then(setStickers).catch();
    window.scrollTo(0, 0);
  }, [filters]);

  const spinner = loading ? (
    <img alt="loading..." src={spinnerSvg} className="mx-auto" />
  ) : null;
  const errorMessage = error ? (
    <img
      alt="error"
      src="https://st.depositphotos.com/1006899/2650/i/450/depositphotos_26505551-stock-photo-error-metaphor.jpg"
      className="mx-auto"
    />
  ) : null;
  const content =
    loading || error ? null : stickers.stickers.length === 0 ? (
      <p className="text-center my-24 text-red-500">
        No stickers found in this category.
      </p>
    ) : (
      <div className="flex flex-col">
        <div className="w-full gap-5 justify-center flex flex-wrap">
          {stickers.stickers.map((el, i) => {
            return (
              <motion.div
                key={el.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 10,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <CardElement itemData={el} addCartItem={addCartItem} />
              </motion.div>
            );
          })}
        </div>

        <nav className="self-center mt-6 items-center flex flex-col">
          <ul className="list-style-none flex">
            <li>
              <span>
                <Button
                  variant="outline"
                  onClick={() => setOptions({ page: filters.page - 1 })}
                  disabled={filters.page === 1}
                >
                  &laquo;
                </Button>
              </span>
            </li>

            {[...Array(Math.min(currentPages, 3)).keys()].map((index) => (
              <li key={index}>
                <Button
                  className="ml-2"
                  variant={filters.page === index + 1 ? "" : "outline"}
                  onClick={() => setOptions({ page: index + 1 })}
                >
                  {index + 1}
                </Button>
              </li>
            ))}

            <li>
              <span>
                <Button
                  variant="outline"
                  onClick={() => setOptions({ page: filters.page + 1 })}
                  className="ml-2"
                  disabled={filters.page === currentPages}
                >
                  &raquo;
                </Button>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    );

  return (
    <motion.div
      className="bg-white w-full rounded-md p-6 drop-shadow "
      initial={{ opacity: 0, translateX: 500 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="mb-6 flex flex-col md:flex-row w-full justify-between pl-6 pr-6">
        <Label className="text-xl mt-1 mb-4 md:mb-0">
          {"Category: " + filters.category}
        </Label>

        <Select
          defaultValue="without"
          onValueChange={(value) => {
            switch (value) {
              case "new":
                setOptions({
                  isNew: !filters.isNew,
                  discount: undefined,
                  page: 1,
                });
                break;
              case "discount":
                setOptions({
                  discount: !filters.discount,
                  isNew: undefined,
                  page: 1,
                });
                break;
              default:
                setOptions({ discount: undefined, isNew: undefined, page: 1 });
            }
          }}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filters" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filter by</SelectLabel>
              <SelectItem value="without">Without filters</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="discount">Discount</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {spinner}
      {errorMessage}
      {content}
    </motion.div>
  );
};

const categories = [
  { name: "All" },
  { name: "Popular" },
  { name: "Animals" },
  { name: "Food" },
  { name: "Money" },
  { name: "Programming" },
  { name: "Videogames" },
  { name: "Music" },
  { name: "Movies" },
  { name: "Sport" },
  { name: "Memes" },
  { name: "Cars" },
];

const colors = [
  {
    name: "Any",
    HEX: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,214,0,1) 20%, rgba(22,255,0,1) 40%, rgba(0,159,255,1) 60%, rgba(184,0,255,1) 80%, rgba(255,0,0,1) 100%)",
  },
  { name: "Red", HEX: "#ff0000" },
  { name: "Blue", HEX: "#8ccef5" },
  { name: "Sky", HEX: "#4287f5" },
  { name: "Yellow", HEX: "#ebe426" },
  { name: "Orange", HEX: "#f2b633" },
  { name: "Green", HEX: "#34f01f" },
  { name: "Brown", HEX: "#734518" },
  { name: "White", HEX: "#ffffff" },
  { name: "Black", HEX: "#000000" },
  { name: "Grey", HEX: "#7d7d7d" },
  { name: "Purple", HEX: "#9f1be0" },
];

const Categories = ({ filters, setOptions }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  return (
    <motion.div
      className=" p-6 bg-white rounded-md lg:w-1/4 pb-8 drop-shadow"
      initial={{ opacity: 0, translateX: -500 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h2 className="text-xl text-center">Categories</h2>
      <div className="w-full bg-violet-50 p-4 flex flex-col justify-start items-start mt-6 rounded-md text-md min-h-80">
        {categories.map((el) => {
          const buttonClassName =
            filters.category === el.name
              ? "drop-shadow bg-white text-black p-4 pl-4 w-full transition duration-300"
              : "text-[#728299] transition duration-300 hover:bg-violet-100 outline-none p-4 pl-4 w-full";
          return (
            <Button
              onClick={() => setOptions({ category: el.name, page: 1 })}
              variant="ghost"
              ref={buttonRef}
              className={buttonClassName}
              key={el.name}
            >
              {el.name}
            </Button>
          );
        })}
      </div>
      <h2 className="text-xl mt-6 text-center">Colors</h2>
      <div className="w-full bg-violet-50 p-4 flex justify-between items-start flex-wrap mt-6 rounded-md text-md md:min-h-80">
        {colors.map((el) => {
          const buttonClassName =
            filters.color === el.name
              ? "h-12 w-1/4 md:size-14 bg-white p-3 transition duration-300 drop-shadow"
              : "h-12 w-1/4 md:size-14 transition duration-300 hover:bg-violet-100 p-3 ";
          return (
            <Button
              onClick={() => setOptions({ color: el.name, page: 1 })}
              variant="ghost"
              ref={buttonRef}
              className={buttonClassName}
              key={el.name}
            >
              <div
                className="rounded-full w-full h-full border"
                style={{ background: el.HEX }}
              ></div>
            </Button>
          );
        })}
      </div>
    </motion.div>
  );
};

const CardElement = ({ addCartItem, itemData }) => {
  return (
    <Card className="group w-56 cursor-pointer">
      {itemData.isNew ? (
        <Badge variant="" className="ml-4 -mt-2 absolute">
          NEW
        </Badge>
      ) : null}
      <Link to={"/item/" + itemData.id}>
        <div className="flex h-16 flex-row justify-between ">
          <div className="ml-6 mt-6">
            <CardTitle className="max-w-28">{itemData.name}</CardTitle>
            <CardDescription>{itemData.size}</CardDescription>
          </div>
          <div className="pr-6 pt-5 text-2xl bg-violet-500 text-white rounded-tr-md" style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)'}}>
            ${itemData.price}
          </div>
          <div
            className=""
          ></div>
        </div>

        <CardContent>
          <div className="flex flex-col justify-center items-center h-52">
            <img
              src={itemData.thumbnail}
              alt=""
              className="w-40 group-hover:scale-110 transition duration-300"
            />
          </div>
        </CardContent>
      </Link>

      <CardFooter className="flex justify-between">
        <CustomToast
          addCartItem={addCartItem}
          sticker={itemData}
          description={`You have successfully added ${itemData.name} to your cart`}
          message="Item added"
          buttonName="ADD TO CART"
          cartIcon={true}
          classNames="w-full"
        />
      </CardFooter>
    </Card>
  );
};

export default CatalogWithCategories;
