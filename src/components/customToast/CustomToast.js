import { toast } from "sonner";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

const CustomToast = ({
  message,
  description,
  sticker,
  addCartItem,
  buttonName,
  cartIcon,
  classNames,
}) => {
  const handleClick = () => {
    addCartItem(sticker);
    toast(message, {
      description: description,
      action: {
        label: "Got it",
        onClick: () => console.log(),
      },
    });
  };
  return (
    <Button className={classNames} onClick={() => handleClick()}>
      {cartIcon ? <ShoppingCart className="w-4 mr-2" /> : null}
      {buttonName}
    </Button>
  );
};

export default CustomToast;
