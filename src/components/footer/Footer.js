import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
import { Home } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

import { Button } from "../ui/button";
const Footer = () => {
  return (
    <footer className="bg-white text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="container flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <Button className="mr-2" variant="ghost" size="icon">
            <a
              href="/"
              className=" text-neutral-600 dark:text-neutral-200 cursor-pointer hover:scale-110 transition duration-200"
            >
              <Twitter className="w-5" />
            </a>
          </Button>
          <Button className="mr-2" variant="ghost" size="icon">
            <a
              href="/"
              className=" text-neutral-600 dark:text-neutral-200 cursor-pointer hover:scale-110 transition duration-200"
            >
              <Facebook className="w-5" />
            </a>
          </Button>
          <Button className="mr-2" variant="ghost" size="icon">
            <a
              href="/"
              className=" text-neutral-600 dark:text-neutral-200 cursor-pointer hover:scale-110 transition duration-200"
            >
              <Instagram className="w-5" />
            </a>
          </Button>
          <Button className="mr-2" variant="ghost" size="icon">
            <a
              href="/"
              className=" text-neutral-600 dark:text-neutral-200 cursor-pointer hover:scale-110 transition duration-200"
            >
              <Youtube className="w-5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="container py-10 text-center md:text-left ">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <Button className="-ml-2 -mt-1 mb-2" variant="ghost">
              <a
                href="/"
                className=" flex items-center justify-center  font-semibold uppercase md:justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-4 w-4"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
                Stickers Shop
              </a>
            </Button>
            <p>footer content, company description</p>
          </div>
          <div className="">
            <h6 className="mb-4 flex ml-2 justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <Button className="-m-2" variant="ghost">
                <a href="/" className="text-neutral-600 dark:text-neutral-200">
                  Stickers
                </a>
              </Button>
            </p>
            <p className="mb-4">
              <Button className="-m-2" variant="ghost">
                <a href="/" className="text-neutral-600 dark:text-neutral-200">
                  Stickerpacks
                </a>
              </Button>
            </p>
            <p className="mb-4">
              <Button className="-m-2" variant="ghost">
                <a href="/" className="text-neutral-600 dark:text-neutral-200">
                  Prints
                </a>
              </Button>
            </p>
            <p>
              <Button className="-m-2" variant="ghost">
                <a href="/" className="text-neutral-600 dark:text-neutral-200">
                  Posters
                </a>
              </Button>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 ml-2 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <Button className="-m-2" variant="ghost">
                <a href="/" className="text-neutral-600 dark:text-neutral-200">
                  Pricing
                </a>
              </Button>
            </p>
            <p className="mb-4">
              <Button className="-m-2" variant="ghost">
                <a href="/" className="text-neutral-600 dark:text-neutral-200">
                  Catalog
                </a>
              </Button>
            </p>
            <p className="mb-4">
              <Button className="-m-2" variant="ghost">
                <a href="/" className="text-neutral-600 dark:text-neutral-200">
                  Orders
                </a>
              </Button>
            </p>
            <p>
              <Button className="-m-2" variant="ghost">
                <a href="/" className="text-neutral-600 dark:text-neutral-200">
                  Help
                </a>
              </Button>
            </p>
          </div>
          <div>
            <h6 className="mb-4 ml-2 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <Button variant="ghost" className="-mb-4">
                <Home className="w-5 mr-2" />
                <p>Kyiv, Ukraine</p>
              </Button>
            </p>

            <a
              href="mailto:info@example.com"
              className="mb-4 flex items-center justify-center md:justify-start"
            >
              <Button variant="ghost" className="-mb-2">
                <Mail className="w-5 mr-2" />
                <p>info@example.com</p>
              </Button>
            </a>

            <a
              href="tel:+1234567890"
              className="mb-4 flex items-center justify-center md:justify-start"
            >
              <Button variant="ghost" className="-mb-2 -mt-2">
                <Phone className="w-5 mr-2" />
                <p>+ 01 234 567 88</p>
              </Button>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center md:justify-start"
            >
              <Button variant="ghost" className="-mb-2 -mt-2">
                <Phone className="w-5 mr-2" />
                <p>+ 01 234 567 88</p>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-violet-100 p-6 text-center dark:bg-neutral-700">
        <span>© 2024 Copyright </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="/"
        >
          Yehor Husieiev
        </a>
      </div>
    </footer>
  );
};

export default Footer;
