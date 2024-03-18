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

const HomeWithNew = ({ addCartItem }) => {
  const [stickers, setStickers] = useState([]);
  const { loading, error, getAllStickers } = useStickersApi();

  useEffect(() => {
    getAllStickers({ isNew: true }).then(setStickers).catch();
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
          {stickers.map((el) => {
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
      <div className="bg-white min-h-96 rounded-md w-full flex flex-col justify-center pb-6">
        <h1 className="text-4xl pl-10 pt-8 text-[#728299]">New</h1>
        <div className="p-10 w-full gap-4 lg:gap-6 justify-center flex flex-wrap">
          {spinner} {errorMessage} {content}
        </div>
        <Link to="/catalog" className="w-1/2 self-center">
          <Button className="w-full" size="lg">
            To catalog
          </Button>
        </Link>
      </div>
    </section>
  );
};

const CardElement = ({ addCartItem, itemData }) => {
  return (
    <Card className="group ">
      <Link to={"/item/" + itemData.id}>
        <CardHeader className="flex flex-row justify-between">
          <div className="">
            <CardTitle>
              {itemData.name}
              <Badge className="ml-2" variant="secondary">
                NEW
              </Badge>
            </CardTitle>
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
