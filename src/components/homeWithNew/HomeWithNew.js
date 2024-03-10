import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";
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

const goodsTemporary = [
  {
    id: 191,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 192,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 193,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 194,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 195,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 196,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 197,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 198,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 199,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
  {
    id: 1190,
    name: "React.js",
    size: "6 cm x 6 cm",
    price: 5,
    thumbnail:
      "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
  },
];

const HomeWithNew = ({ addCartItem }) => {
  return (
    <section className="container pb-6 w-full">
      <div className="bg-white min-h-96 rounded-md w-full flex flex-col justify-center pb-6">
        <h1 className="text-4xl pl-10 pt-8 text-[#728299]">New</h1>
        <div className="p-10 w-full gap-4 lg:gap-6 justify-center flex flex-wrap">
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
            {/* md:basis-1/2 lg:basis-1/3 */}
            <CarouselContent>
              {goodsTemporary.map((el) => {
                return (
                  <CarouselItem
                    className="md:basis-1/2 lg:basis-1/3"
                    key={el.id}
                  >
                    <CardElement itemData={el} addCartItem={addCartItem} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Button className="w-1/2 self-center" size="lg">
          To catalog
        </Button>
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
        <Button className="w-full" onClick={() => addCartItem(itemData)}>
          <ShoppingCart className="w-4 mr-2" />
          ADD TO CART
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HomeWithNew;
