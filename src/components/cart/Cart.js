import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const cartItems = [{ name: "cartItemName", price: "cartItemPrice" }];

const Cart = () => {
  return (
    <section className="container pt-6 pb-6 w-full">
      <div className="min-h-96 rounded-md w-full flex pb-6 gap-8">
        <div className="flex flex-col w-3/5 rounded-md gap-4">
            <Label className=' text-gray-500'>Your cart:</Label>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="w-2/5 rounded-md max-h-96 mt-7">
          <div className="bg-white w-2/5 rounded-md w-full h-96"></div>
          <Button size="lg" className="mt-6 w-full">
            BUY
          </Button>
        </div>
      </div>
    </section>
  );
};

const CartItem = () => {
  return (
    <div className="bg-white max-h-32 rounded-md pl-10 pr-10 pt-4 pb-4 flex justify-between items-center">
      <img
        src="https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js-200x200.png"
        alt=""
        className="w-16"
      />
      <div className="">
        <h2 className="font-semibold text-xl">React.js</h2>
        <p className="text-gray-400 text-sm">6 cm x 6 cm</p>
      </div>
      <div className="">
        <Input type="number" className="max-w-20 text-center" value='2'></Input>
      </div>
      <p>$5</p>
      <Button size='icon'><Trash2/></Button>
    </div>
  );
};

export default Cart;
