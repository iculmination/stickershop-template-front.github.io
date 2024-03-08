import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const cartItems = [
//   { name: "React.js", price: 5, size: "6 cm x 6 cm" },
//   { name: "React.js", price: 7, size: "4 cm x 6 cm" },
//   { name: "React.js", price: 25, size: "6 cm x 20 cm" },
//   { name: "React.js", price: 10, size: "6 cm x 6 cm" },
//   { name: "React.js", price: 3, size: "8 cm x 6 cm" },
//   { name: "React.js", price: 1, size: "6 cm x 9 cm" },
// ];

const Cart = ({ cartItems, removeCartItem, editCartItem }) => {
  // const [total, setTotal] = useState(0);

  // useEffect(()=>{setTotal(cartItems.map((el)=>{el.price}))},[])

  return (
    <section className="container pt-8 pb-8 w-full">
      <div className="min-h-96 rounded-md w-full flex flex-col pb-6 gap-8">
        <div className="flex flex-col w-full rounded-md gap-4">
          {cartItems.map((item) => {
            return (
              <CartItem
                itemData={item}
                removeCartItem={removeCartItem}
                editCartItem={editCartItem}
                // setTotal={setTotal}
              />
            );
          })}
        </div>

        <div className="w-full rounded-md">
          <div className="bg-white w-2/5 rounded-md w-full">
            <p>*content*</p>
            {/* <p>total: {total}</p> */}
            <Button size="lg" className="mt-6 w-full">
              <ShoppingCart className="w-5 mr-2" />
              BUY
            </Button>
          </div>
        </div>

        {/* <div className="w-2/5 rounded-md max-h-96 mt-7">
          <div className="bg-white w-2/5 rounded-md w-full h-96">
            <p>*content*</p>
            <p>total: {total}</p>
          </div>
          <Button size="lg" className="mt-6 w-full">
            <ShoppingCart className='w-5 mr-2'/>
            BUY
          </Button>
        </div> */}
      </div>
    </section>
  );
};

const CartItem = ({ itemData, setTotal, removeCartItem, editCartItem }) => {
  const handleInputChange = (value) => {
    const newQuantity = itemData.quantity + value;
    if (newQuantity >= 1) {
      editCartItem(itemData.id, newQuantity);
    }
  };

  return (
    <div
      className="bg-white max-h-32 rounded-md pl-4 pr-4 lg:pl-10 lg:pr-10 pt-4 pb-4 flex justify-between items-center"
      key={itemData.id}
    >
      <Link to={"/item/" + itemData.id}>
        <img
          src="https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png"
          alt=""
          className="w-10 md:w-16"
        />
      </Link>
      <Link to={"/item/" + itemData.id}>
        <div className="">
          <h2 className="font-semibold md:text-xl">{itemData.name}</h2>
          <p className="text-gray-400 text-[10px] md:text-sm">
            {itemData.size}
          </p>
        </div>
      </Link>
      <div className="">
        <form class="max-w-xs mx-auto">
          <label
            for="counter-input"
            class="block mb-1 text-sm font-medium text-gray-900"
          ></label>
          <div class="flex items-center">
            <button
              type="button"
              id="decrement-button"
              onClick={() => handleInputChange(-1)}
              data-input-counter-decrement="counter-input"
              class="text-sm md:text-xl flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md w-4 h-4 md:h-5 md:w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
              -
            </button>
            <Input
              type="text"
              id="counter-input"
              data-input-counter
              class="flex-shrink-0 text-gray-900 border-0 bg-transparent text-[12px] md:text-sm font-normal focus:outline-none focus:ring-0 max-w-6 md:max-w-10 text-center"
              placeholder=""
              value={itemData.quantity}
              required
            />
            <button
              type="button"
              id="increment-button"
              onClick={() => handleInputChange(1)}
              data-input-counter-increment="counter-input"
              class="text-sm md:text-xl flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md w-4 h-4 md:h-5 md:w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
              +
            </button>
          </div>
        </form>
      </div>
      <p className="text-sm md:text-lg">
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
