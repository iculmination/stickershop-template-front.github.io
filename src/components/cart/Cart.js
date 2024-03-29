import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Cart = ({ cartItems, removeCartItem, editCartItem }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  let total = 0;
  let totalItems = 0;
  cartItems.map((item) => {
    total += item.quantity * item.price;
    totalItems += item.quantity;
  });
  const content =
    cartItems.length === 0 ? (
      <motion.div
        className="w-full md:w-1/2 lg:w-1/3 mx-auto bg-white rounded-md p-4 mt-36"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="font-semibold md:text-xl text-center mx-auto">
          Oops...
          <p className=" font-normal text-sm md:text-md">
            It looks like your cart is empty
          </p>
        </div>
        <Link to="/catalog">
          <Button size="lg" className="mt-6 w-full">
            <ShoppingCart className="w-5 mr-2" />
            Go shopping
          </Button>
        </Link>
      </motion.div>
    ) : (
      <>
        <div className="flex flex-col w-full rounded-md gap-4">
          <AnimatePresence>
            {cartItems.map((item, i) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, translateX: 500 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ translateX: 500, opacity: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <CartItem
                    itemData={item}
                    removeCartItem={removeCartItem}
                    editCartItem={editCartItem}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.div
          className="w-full md:w-1/2 lg:w-1/3 mx-auto bg-white rounded-md p-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="font-semibold md:text-xl text-center mx-auto">
            Total: ${total}{" "}
            <p className="text-gray-400 font-normal text-[12px] md:text-sm">
              ({totalItems} items, {cartItems.length} different)
            </p>
          </div>
          <Button size="lg" className="mt-6 w-full">
            <ShoppingCart className="w-5 mr-2" />
            BUY
          </Button>
        </motion.div>
      </>
    );
  return (
    <section className="container pt-8 pb-8 w-full">
      <div className="min-h-96 rounded-md w-full flex flex-col pb-6 gap-8">
        {content}
      </div>
    </section>
  );
};

const CartItem = ({ itemData, removeCartItem, editCartItem }) => {
  const handleInputChange = (value) => {
    const newQuantity = itemData.quantity + value;
    if (newQuantity >= 1) {
      editCartItem(itemData.id, newQuantity);
    }
  };

  return (
    <div
      className="bg-white max-h-32 rounded-md -mx-6 px-4 lg:pl-10 lg:pr-10 pt-4 pb-4 flex justify-between items-center"
      key={itemData.id}
    >
      <Link to={"/item/" + itemData.id}>
        <img src={itemData.thumbnail} alt="" className="w-10 md:w-16" />
      </Link>
      <Link to={"/item/" + itemData.id}>
        <div className="w-32 md:w-52 xl:w-72">
          <h2 className="font-semibold md:text-xl">{itemData.name}</h2>
          <p className="text-gray-400 text-[10px] md:text-sm">
            {itemData.size}
          </p>
        </div>
      </Link>
      <div className="">
        <form className="max-w-xs mx-auto">
          <label
            htmlFor="counter-input"
            className="block mb-1 text-sm font-medium text-gray-900"
          ></label>
          <div className="flex items-center w-14">
            <button
              type="button"
              id="decrement-button"
              onClick={() => handleInputChange(-1)}
              data-input-counter-decrement="counter-input"
              className="text-sm md:text-xl flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md w-4 h-4 md:h-5 md:w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
              -
            </button>
            <input
              type="text"
              id="counter-input"
              data-input-counter
              className="flex-shrink-0 text-gray-900 border-0 bg-transparent text-[12px] md:text-sm font-normal focus:outline-none focus:ring-0 max-w-6 md:max-w-10 text-center"
              placeholder=""
              value={itemData.quantity}
              required
              readOnly
            />
            <button
              type="button"
              id="increment-button"
              onClick={() => handleInputChange(1)}
              data-input-counter-increment="counter-input"
              className="text-sm md:text-xl flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md w-4 h-4 md:h-5 md:w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
              +
            </button>
          </div>
        </form>
      </div>
      <p className="text-sm md:text-lg w-8   text-left">
        ${itemData.price * itemData.quantity}
      </p>
      <Button
        size="icon"
        className="w-7 h-7 md:h-10 md:w-10"
        onClick={() => removeCartItem(itemData.id)}
      >
        <Trash2 className="w-4 md:h-6 md:w-6" />
      </Button>
    </div>
  );
};

export default Cart;
