import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";
import { useParams } from "react-router-dom";
import { Separator } from "../ui/separator";
import useStickersApi from "../stickers/StickersApi";

const SingleGood = ({ addCartItem }) => {
  const { itemId } = useParams();
  const [sticker, setSticker] = useState({});
  const { loading, error, getStickerById } = useStickersApi();

  useEffect(() => {
    getStickerById(itemId).then(setSticker).catch();
  }, []);

  return (
    <section className="container pt-6 pb-6 lg:flex relative min-h-[700px] lg:justify-between items-center gap-10">
      <Card className="w-full lg:w-2/5 p-6 h-full ">
        <CardContent>
          <div className="flex justify-center items-center">
            <img
              src={sticker.thumbnail}
              alt=""
              className="w-60 hover:scale-110 pt-2 transition duration-300"
            />
          </div>
          <div className="mt-6">
            <h1 className="text-3xl font-semibold mb-2 flex">
              {sticker.name}
              <Badge variant="" className="mt-1 mb-1 ml-2">
                NEW
              </Badge>
            </h1>
            <p className="text-gray-600 mb-4">Size: {sticker.size}</p>
            <h2 className="text-2xl font-semibold mb-4">${sticker.price}</h2>
            <Button className="w-full" onClick={() => addCartItem(sticker)}>
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
          <li className="max-w-[600px]">Description: {sticker.description}</li>
          <Separator className="mb-2 mt-2" />
          <li>Material: {sticker.materials}</li>
          <Separator className="mb-2 mt-2" />
          <li>Sizes: Small, Medium, Large</li>
          <Separator className="mb-2 mt-2" />
          <li>
            Colors:{" "}
            {sticker.colors?.length > 1
              ? sticker.colors.join(", ")
              : sticker.colors}
          </li>
          <Separator className="mb-2 mt-2" />
          <li>
            Categories:{" "}
            {sticker.categories?.length > 1
              ? sticker.categories.join(", ")
              : sticker.categories}
          </li>
          <Separator className="mb-2 mt-2" />
          <li>In stock: {sticker.inStock}</li>
        </ul>
      </div>
    </section>
  );
};

export default SingleGood;
