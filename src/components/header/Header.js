import { UserRound, Search, ShoppingCart, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Label } from "../ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { set } from "react-hook-form";

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
        <div className="flex w-full items-center max-w-xl space-x-2 ml-12 mr-8">
          <Input type="email" placeholder="Search" className="w-full" />
          <Button type="submit" size="icon">
            <Search className="w-5" />
          </Button>
        </div>
        <div className="hidden md:block">
          <NavMenu setSelectedCategory={setSelectedCategory} />
        </div>

        <Sheet className="">
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" size='icon'>
              <Menu className=""/>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Stickers Shop</SheetTitle>
              <SheetDescription>
                A wide variety of stickers at a cheap price
              </SheetDescription>
            </SheetHeader>
            <NavMenu setSelectedCategory={setSelectedCategory} />

            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

const NavMenu = ({ setSelectedCategory }) => {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className='flex flex-col mt-4 mb-4 md:mt-0 md:mb-0 md:flex-row'>
        <NavigationMenuItem>
          <Link to="/catalog">
            <NavigationMenuLink>
              <Button
                variant="ghost"
                size=""
                type="submit"
                onClick={() => setSelectedCategory("Popular")}
              >
                Catalog
              </Button>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/auth/login">
            <NavigationMenuLink>
              <Button variant="ghost" size="icon">
                <UserRound className="w-5" />
              </Button>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/cart">
            <NavigationMenuLink>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5" />
              </Button>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
