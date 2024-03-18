import { UserRound, Search, ShoppingCart, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
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

const Header = ({ setOptions, user }) => {
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
          <Button type="submit" size="icon" className="w-12">
            <Search className="w-5" />
          </Button>
        </div>
        <div className="hidden md:block">
          <NavigationMenu className="">
            <NavigationMenuList className="flex flex-col mt-4 mb-4 md:mt-0 md:mb-0 md:flex-row">
              <NavigationMenuItem>
                <Link to="/catalog">
                  <Button
                    variant="ghost"
                    size=""
                    type="submit"
                    // onClick={() => setOptions("Popular")}
                  >
                    Catalog
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to={"/user/" + user.login}>
                  <Button variant="ghost" size="icon">
                    <UserRound className="w-5" />
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/cart">
                  <Button variant="ghost" size="icon">
                    <ShoppingCart className="w-5" />
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Sheet className="">
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Menu className="" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="">
            <SheetHeader>
              <SheetTitle>Stickers Shop</SheetTitle>
              <SheetDescription>
                A wide variety of stickers at a cheap price
              </SheetDescription>
            </SheetHeader>

            <div className="w-full justify-center items-center">
              <NavigationMenu className="w-full">
                <NavigationMenuList className="w-full justify-center items-center flex flex-col mt-4 mb-4 md:mt-0 md:mb-0 md:flex-row mx-auto">
                  <NavigationMenuItem className="mx-auto self-center w-full">
                    <Link to="/catalog">
                      <SheetClose asChild>
                        <Button
                          variant="ghost"
                          size=""
                          type="submit"
                          // onClick={() => setOptions("Popular")}
                        >
                          Catalog
                        </Button>
                      </SheetClose>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to={"/user/" + user.login}>
                      <SheetClose asChild>
                        <Button variant="ghost">Profile</Button>
                      </SheetClose>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/cart">
                      <SheetClose asChild>
                        <Button variant="ghost">Cart</Button>
                      </SheetClose>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

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

export default Header;
