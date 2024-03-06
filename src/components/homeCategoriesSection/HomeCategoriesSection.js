import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const HomeCategoriesSection = ({ setSelectedCategory }) => {
  return (
    <section className="container pt-6 pb-6 w-full">
      <div className="bg-white min-h-96 rounded-md w-full flex flex-col pb-6">
        <h1 className="text-4xl pl-10 pt-8 text-[#728299]">
          Available stickers categories
        </h1>
        <div className="grid grid-cols-3 gap-6 p-10">
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("exampleCategory1")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-105 bg-violet-300 w-full min-h-72 rounded-md"
          >
            <h2 className="text-3xl font-bold p-8 text-white">
              Stickers category 1
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("exampleCategory2")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-105 bg-violet-300 w-full min-h-72 rounded-md"
          >
            <h2 className="text-3xl font-bold p-8 text-white">
              Stickers category 2
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("exampleCategory3")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-105 bg-violet-300 w-full min-h-72 rounded-md row-span-2"
          >
            <h2 className="text-3xl font-bold p-8 text-white">
              Stickers category 3
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("exampleCategory4")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-105 bg-violet-300 w-full min-h-72 rounded-md col-span-2"
          >
            <h2 className="text-3xl font-bold p-8 text-white">
              Stickers category 4
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("exampleCategory5")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-105 bg-violet-300 w-full min-h-72 rounded-md"
          >
            <h2 className="text-3xl font-bold p-8 text-white">
              Stickers category 5
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("exampleCategory6")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-105 bg-violet-300 w-full min-h-72 rounded-md col-span-2"
          >
            <h2 className="text-3xl font-bold p-8 text-white">
              Stickers category 6
            </h2>
          </Link>
        </div>
        <Button className="w-2/4 self-center" size="lg">
          To catalog
        </Button>
      </div>
    </section>
  );
};

export default HomeCategoriesSection;
