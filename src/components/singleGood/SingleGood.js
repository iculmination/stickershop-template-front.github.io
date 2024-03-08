import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";
import { useParams } from "react-router-dom";
import { Separator } from "../ui/separator";

const SingleGood = ({ addCartItem }) => {
  const { itemId } = useParams();

  return (
    <section className="container pt-6 pb-6 lg:flex relative min-h-[700px] lg:justify-between items-center gap-10">
      <Card className="w-full lg:w-2/5 p-6 h-full ">
        <CardContent>
          <div className="flex justify-center items-center">
            <img
              src="https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png"
              alt=""
              className="w-60 hover:scale-110 pt-2 transition duration-300"
            />
          </div>
          <div className="mt-6">
            <h1 className="text-3xl font-semibold mb-2 flex">
              {itemId}
              <Badge variant="" className="mt-1 mb-1 ml-2">
                NEW
              </Badge>
            </h1>
            <p className="text-gray-600 mb-4">Size: 6 cm x 6 cm</p>
            {/* <p className="text-gray-600 mb-4">
              Description: description of the sticker description of the sticker
              description of the sticker description of the sticker description
              of the sticker
            </p> */}
            <h2 className="text-2xl font-semibold mb-4">$5</h2>
            <Button
              className="w-full"
              onClick={() =>
                addCartItem({
                  id: itemId,
                  name: "React.js",
                  price: 5,
                  size: "6 cm x 6 cm",
                  thumbnail:
                    "https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png",
                })
              }
            >
              <ShoppingCart className="w-4 mr-2" />
              ADD TO CART
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="bg-white w-full lg:w-3/5 rounded-md p-6 h-full drop-shadow mt-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Characteristics:</h2>
        <ul className="text-gray-600">
          <Separator className="mb-2 mt-2" />
          <li className="max-w-[600px]">
            Description: description of the sticker description of the sticker
            description of the sticker description of the sticker description of
            the sticker
          </li>
          <Separator className="mb-2 mt-2" />
          <li>Material: Vinyl</li>
          <Separator className="mb-2 mt-2" />
          <li>Sizes: Small, Medium, Large</li>
          <Separator className="mb-2 mt-2" />
          <li>Colors: Red, Blue, Green</li>
          <Separator className="mb-2 mt-2" />
          <li>In stock: {itemId}</li>
        </ul>
      </div>
    </section>
  );
};

export default SingleGood;
