import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";

const cartItems = [
  { name: "React.js", price: 5, size: "6 cm x 6 cm" },
  { name: "React.js", price: 7, size: "4 cm x 6 cm" },
  { name: "React.js", price: 25, size: "6 cm x 20 cm" },
  { name: "React.js", price: 10, size: "6 cm x 6 cm" },
  { name: "React.js", price: 3, size: "8 cm x 6 cm" },
  { name: "React.js", price: 1, size: "6 cm x 9 cm" },
];

const Cart = () => {
  const [total, setTotal] = useState(0);

  // useEffect(()=>{setTotal(cartItems.map((el)=>{el.price}))},[])

  return (
    <section className="container pt-6 pb-6 w-full">
      <div className="min-h-96 rounded-md w-full flex pb-6 gap-8">
        <div className="flex flex-col w-3/5 rounded-md gap-4">
          <Label className=" text-gray-500">Your cart:</Label>
          {cartItems.map((item) => {
            return (
              <CartItem
                name={item.name}
                price={item.price}
                size={item.size}
                setTotal={setTotal}
              />
            );
          })}
        </div>

        <div className="w-2/5 rounded-md max-h-96 mt-7">
          <div className="bg-white w-2/5 rounded-md w-full h-96">
            <p>*content*</p>
            <p>total: {total}</p>
          </div>
          <Button size="lg" className="mt-6 w-full">
            <ShoppingCart className='w-5 mr-2'/>
            BUY
          </Button>
        </div>
      </div>
    </section>
  );
};

const CartItem = ({ name, price, size, setTotal }) => {
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (value) => {
    setQuantity((prevState) => prevState + value);
  };

  return (
    <div className="bg-white max-h-32 rounded-md pl-4 pr-4 lg:pl-10 lg:pr-10 pt-4 pb-4 flex justify-between items-center">
      <img
        src="https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png"
        alt=""
        className="w-16"
      />
      <div className="">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p className="text-gray-400 text-sm">{size}</p>
      </div>
      <div className="">
        <form class="max-w-xs mx-auto">
          <label
            for="counter-input"
            class="block mb-1 text-sm font-medium text-gray-900"
          ></label>
          <div class="relative flex items-center">
            <button
              type="button"
              id="decrement-button"
              onClick={() => handleInputChange(-1)}
              data-input-counter-decrement="counter-input"
              class="text-xl flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              -
            </button>
            <Input
              type="text"
              id="counter-input"
              data-input-counter
              class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
              placeholder=""
              value={quantity}
              required
            />
            <button
              type="button"
              id="increment-button"
              onClick={() => handleInputChange(1)}
              data-input-counter-increment="counter-input"
              class="text-xl flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              +
            </button>
          </div>
        </form>
      </div>
      <p>${price * quantity}</p>
      <Button size="icon">
        <Trash2 />
      </Button>
    </div>
  );
};

export default Cart;
