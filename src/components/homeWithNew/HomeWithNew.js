import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import CustomToast from "../customToast/CustomToast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import useStickersApi from "../stickers/StickersApi";
import { useState, useEffect } from "react";
import spinnerSvg from "../ui/Spinner-1.9s-204px.svg";
import { motion } from "framer-motion";

const HomeWithNew = ({ addCartItem }) => {
  const [stickers, setStickers] = useState({ stickers: [], count: 0 });
  const { loading, error, getAllStickers } = useStickersApi();

  useEffect(() => {
    getAllStickers({ isNew: true }).then(setStickers).catch();
    console.log(stickers);
  }, []);

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
    loading || error ? null : (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-4/5"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {stickers.stickers.map((el) => {
            return (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={el.id}>
                <CardElement itemData={el} addCartItem={addCartItem} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );

  return (
    <section className="container pb-6 w-full">
      <motion.div
        className="bg-white min-h-96 rounded-md w-full flex flex-col justify-center pb-6"
        initial={{ opacity: 0, translateY: 1000 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="text-4xl pl-10 pt-8 text-[#728299]">New</h1>
        <div className="p-10 w-full gap-4 lg:gap-6 justify-center flex flex-wrap">
          {spinner} {errorMessage} {content}
        </div>
        <Link to="/catalog" className="w-1/2 self-center">
          <Button className="w-full" size="lg">
            To catalog
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

const CardElement = ({ addCartItem, itemData }) => {
  return (
    <Card className="group cursor-pointer relative">
      <Link to={"/item/" + itemData.id}>
        <div className="h-16 ml-6 mt-6">
          <CardTitle className="max-w-28">{itemData.name}</CardTitle>
          <CardDescription>{itemData.size}</CardDescription>
          {itemData.isNew ? (
            <Badge variant="" className="z-50 mr-1">
              NEW
            </Badge>
          ) : null}
          {itemData.discount ? (
            <Badge variant="" className="z-50">
              DISCOUNT
            </Badge>
          ) : null}
        </div>
        {itemData.discount ? (
          <div
            className="absolute top-0 right-0 w-28 h-28 text-2xl bg-gradient-to-l from-violet-400 to-violet-600 text-white rounded-tr-md flex font-semibold"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)" }}
          >
            <div className="rotate-45 flex justify-center w-40 pt-6 text-center gap-2">
              <span className="line-through font-normal text-violet-200 text-xl ">
                ${itemData.price}
              </span>
              <span className="">${itemData.price * 0.9}</span>
            </div>
          </div>
        ) : (
          <div className="absolute top-0 right-0 w-20 h-20 flex items-center text-2xl font-semibold justify-center">
            ${itemData.price}
          </div>
        )}
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

export default HomeWithNew;
