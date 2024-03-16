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
import useStickersApi from "../stickers/StickersApi";
import spinnerSvg from "../ui/Spinner-1.9s-204px.svg";
import { Badge } from "../ui/badge";

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
  const [stickers, setStickers] = useState([]);
  const { loading, error, getAllStickers } = useStickersApi();

  useEffect(() => {
    getAllStickers().then(setStickers).catch();
  }, []);

  const spinner = loading ? (
    <img alt="loading..." src={spinnerSvg} className="mx-auto" />
  ) : null;
  const errorMessage = error ? (
    <img
      alt="error"
      src="https://st.depositphotos.com/1006899/2650/i/450/depositphotos_26505551-stock-photo-error-metaphor.jpg"
    />
  ) : null;
  const content =
    loading || error ? null : (
      <>
        <div className="w-full gap-5 justify-center flex flex-wrap">
          {stickers.map((el) => {
            return (
              <CardElement
                itemData={el}
                addCartItem={addCartItem}
                key={el.id}
              />
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
      </>
    );

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
      {spinner}
      {errorMessage}
      {content}
    </div>
  );
};

const categories = [
  { name: "Popular" },
  { name: "Animals" },
  { name: "Food" },
  { name: "Money" },
  { name: "Programming" },
  { name: "Videogames" },
  { name: "Music" },
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
        {categories.map((el) => {
          const buttonClassName =
            selectedCategory === el.name
              ? "focus:outline-none bg-white text-black p-4 pl-4 w-full transition duration-300"
              : "text-[#728299] transition duration-300 hover:bg-violet-100 focus:outline-none p-4 pl-4 w-full";
          return (
            <Button
              onClick={() => setSelectedCategory(el.name)}
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
            {itemData.isNew ? (
              <Badge variant="" className="mt-1 absolute">
                NEW
              </Badge>
            ) : null}
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
