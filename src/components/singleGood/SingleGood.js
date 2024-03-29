import { useEffect, useState } from "react";
import CustomToast from "../customToast/CustomToast";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { useParams } from "react-router-dom";
import { Separator } from "../ui/separator";
import useStickersApi from "../stickers/StickersApi";
import spinnerSvg from "../ui/Spinner-1.9s-204px.svg";
import { motion } from "framer-motion";

const SingleGood = ({ addCartItem }) => {
  const { itemId } = useParams();
  const [sticker, setSticker] = useState({ colors: "", categories: "" });
  const { loading, error, getStickerById } = useStickersApi();

  useEffect(() => {
    getStickerById(itemId).then(setSticker).catch();
    window.scrollTo(0, 0);
  }, []);

  const stickerColors =
    sticker.colors?.length > 1 ? sticker.colors.join(", ") : sticker.colors[0];
  const stickerCategories =
    sticker.categories?.length > 1
      ? sticker.categories.join(", ")
      : sticker.categories[0];

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
    loading || error || !sticker ? null : (
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
            {sticker.isNew ? (
              <Badge variant="" className="mt-1 mb-1 ml-2 h-7">
                NEW
              </Badge>
            ) : null}
            {sticker.discount ? (
              <Badge variant="" className="mt-1 mb-1 ml-2 h-7">
                DISCOUNT
              </Badge>
            ) : null}
          </h1>
          <p className="text-gray-600 mb-4">Size: {sticker.size}</p>
          <h2 className="text-2xl font-semibold mb-4">
            {sticker.discount ? (
              <span>
                <span className="line-through mr-2 text-gray-400 font-normal">
                  ${sticker.price}
                </span>
                ${sticker.price * 0.9}
              </span>
            ) : (
              <span>${sticker.price}</span>
            )}
          </h2>
          <CustomToast
            addCartItem={addCartItem}
            sticker={sticker}
            description={`You have successfully added ${sticker.name} to your cart`}
            message="Item added"
            buttonName="ADD TO CART"
            cartIcon={true}
            classNames="w-full"
          />
        </div>
      </CardContent>
    );
  const charasteristics =
    loading || error || !sticker ? null : (
      <>
        <h2 className="text-3xl font-semibold mb-4">Characteristics:</h2>
        <ul className="text-gray-600">
          <Separator className="mb-2 mt-2" />
          <li className="max-w-[600px]">Description: {sticker.description}</li>
          <Separator className="mb-2 mt-2" />
          <li>Material: {sticker.materials}</li>
          <Separator className="mb-2 mt-2" />
          <li>Sizes: Small, Medium, Large</li>
          <Separator className="mb-2 mt-2" />
          <li>Colors: {stickerColors?.toLowerCase()}</li>
          <Separator className="mb-2 mt-2" />
          <li>Categories: {stickerCategories?.toLowerCase()}</li>
          <Separator className="mb-2 mt-2" />
          <li>In stock: {sticker.inStock}</li>
        </ul>
      </>
    );

  return (
    <section className="container pt-6 pb-6 lg:flex relative min-h-[700px] lg:justify-between items-center gap-10">
      <motion.div
        className="w-full lg:w-2/5 p-6 h-full bg-white rounded-md drop-shadow"
        initial={{ opacity: 0, translateY: 1000 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {spinner}
        {errorMessage}
        {content}
      </motion.div>

      <motion.div
        className="bg-white w-full lg:w-3/5 rounded-md p-6 h-full drop-shadow mt-8 mb-8"
        initial={{ opacity: 0, translateY: 1000 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {spinner}
        {errorMessage}
        {charasteristics}
      </motion.div>
    </section>
  );
};

export default SingleGood;
