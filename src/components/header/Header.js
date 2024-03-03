import { ShoppingCart, User } from "lucide-react";
import { UserRound } from "lucide-react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "..//ui/navigation-menu";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="bg-white w-full drop-shadow-md">
      <div className="container bg-white h-24 w-full flex justify-between items-center">
        <a href="/">
          <img
            src="https://static-00.iconduck.com/assets.00/sticker-icon-512x512-rzveai8i.png"
            alt=""
            className="w-12 ml-4 cursor-pointer"
          />
        </a>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Search" />
          <Button type="submit" size="icon">
            <Search className="w-5" />
          </Button>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <a href="/catalog">
                <NavigationMenuLink>
                  <Button variant="ghost" size="">
                    Catalog
                  </Button>
                </NavigationMenuLink>
              </a>
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
