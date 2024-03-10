import React, { useEffect, useState, useRef } from "react";
import { ShoppingCart } from "lucide-react";
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

import { Link } from "react-router-dom";

const goodsTemporary = [
  {
    id: 1,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 2,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 3,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 4,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 5,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 6,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 7,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 8,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 9,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 10,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
];

const CatalogWithCategories = ({
  selectedCategory,
  setSelectedCategory,
  addCartItem,
}) => {
  return (
    <section className="container w-full flex gap-6 pt-6 pb-6">
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Catalog selectedCategory={selectedCategory} addCartItem={addCartItem} />
    </section>
  );
};

const Catalog = ({ selectedCategory, addCartItem }) => {
  // const [sort, setSort] = useState("top");

  return (
    <div className="bg-white w-full rounded-md p-6 drop-shadow">
      <div className="mb-6 flex w-full justify-between pl-6 pr-6">
        <Label className="text-xl mt-1">
          {selectedCategory ? "Category: " + selectedCategory : "Catalog"}
        </Label>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sorting by</SelectLabel>
              <SelectItem value="apple">Price</SelectItem>
              <SelectItem value="banana">Size</SelectItem>
              <SelectItem value="blueberry">Name</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full gap-5 justify-center flex flex-wrap">
        {goodsTemporary.map((el) => {
          return (
            <CardElement itemData={el} addCartItem={addCartItem} key={el.id} />
          );
        })}
      </div>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

const categories = [
  { id: "Popular" },
  { id: "exampleCategory1" },
  { id: "exampleCategory2" },
  { id: "exampleCategory3" },
  { id: "exampleCategory4" },
  { id: "exampleCategory5" },
  { id: "exampleCategory6" },
];

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  return (
    <div className="hidden lg:block p-6 bg-white rounded-md lg:w-1/4 pb-8 drop-shadow">
      <h2 className="text-xl">Categories</h2>
      <div className="w-full bg-violet-50 p-4 flex flex-col justify-start items-start mt-6 rounded-md text-md min-h-80">
        {categories.map((el, i) => {
          const buttonClassName =
            selectedCategory === el.id
              ? "focus:outline-none bg-white text-black p-4 pl-4 w-full transition duration-300"
              : "text-[#728299] transition duration-300 hover:bg-violet-100 focus:outline-none p-4 pl-4 w-full";
          return (
            <Button
              onClick={() => setSelectedCategory(el.id)}
              variant="ghost"
              ref={buttonRef}
              className={buttonClassName}
              key={el.id}
            >
              {i === 0 ? "Popular" : "Category " + i}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

const CardElement = ({ addCartItem, itemData }) => {
  return (
    <Card className="group w-56 cursor-pointer">
      <Link to={"/item/" + itemData.id}>
        <CardHeader className="flex flex-row justify-between">
          <div className="">
            <CardTitle>{itemData.name}</CardTitle>
            <CardDescription>{itemData.size}</CardDescription>
          </div>
          <CardTitle className="text-2xl">${itemData.price}</CardTitle>
        </CardHeader>

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
        <Button className="w-full" onClick={() => addCartItem(itemData)}>
          <ShoppingCart className="w-4 mr-2" />
          ADD TO CART
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CatalogWithCategories;
