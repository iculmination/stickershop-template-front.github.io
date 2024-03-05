import { ShoppingCart } from "lucide-react";
import { UserRound } from "lucide-react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "..//ui/navigation-menu";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Header = ({ setSelectedCategory }) => {
  return (
    <header className="bg-white w-full drop-shadow-md">
      <div className="container bg-white h-24 w-full flex justify-between items-center">
        <Link to="/">
          <img
            src="https://static-00.iconduck.com/assets.00/sticker-icon-512x512-rzveai8i.png"
            alt=""
            className="w-12 ml-4 cursor-pointer"
          />
        </Link>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Search" />
          <Button type="submit" size="icon">
            <Search className="w-5" />
          </Button>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
          
            <NavigationMenuItem>
              <Link to="/catalog">
                <NavigationMenuLink>
                  <Button
                    variant="ghost"
                    size=""
                    onClick={() => setSelectedCategory("Popular")}
                  >
                    Catalog
                  </Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="/user">
                <NavigationMenuLink>
                  <Button variant="ghost" size="icon">
                    <UserRound className="w-5" />
                  </Button>
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="/cart">
                <NavigationMenuLink>
                  <Button variant="ghost" size="icon">
                    <ShoppingCart className="w-5" />
                  </Button>
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>

        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
