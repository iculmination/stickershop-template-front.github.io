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

const HomeWithNew = () => {
  return (
    <section className="container pb-6 w-full">
      <div className="bg-white min-h-96 rounded-md w-full flex flex-col justify-center pb-6">
        <h1 className="text-4xl pl-10 pt-8 text-[#728299]">New</h1>
        <div className="p-10 w-full gap-6 justify-center flex flex-wrap">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-3/5"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <CardElement />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Button className="w-2/4 self-center" size="lg">
          To catalog
        </Button>
      </div>
    </section>
  );
};

const CardElement = () => {
  return (
    <Card className="group w-56 ">
      <CardHeader className="flex flex-row justify-between">
        <div className="">
          <CardTitle>
            React.js
            <Badge className="ml-2" variant="secondary">
              NEW
            </Badge>
          </CardTitle>
          <CardDescription>6 cm x 6 cm</CardDescription>
        </div>
        <CardTitle className="text-2xl">$5</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-center items-center h-52">
          <img
            src="https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png"
            alt=""
            className="w-40 group-hover:scale-110 transition duration-300"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full">
          <ShoppingCart className="w-4 mr-2" />
          ADD TO CART
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HomeWithNew;
