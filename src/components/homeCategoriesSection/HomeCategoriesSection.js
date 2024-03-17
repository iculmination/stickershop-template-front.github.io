import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const HomeCategoriesSection = ({ setSelectedCategory }) => {
  return (
    <section className="container pt-6 pb-6 w-full">
      <div className="bg-white min-h-96 rounded-md w-full flex flex-col pb-6">
        <h1 className="text-2xl md:text-4xl pl-10 pt-8 text-[#728299]">
          Available stickers categories
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("Animals")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-violet-300 w-full min-h-48 md:min-h-72 rounded-md"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white">
              Animals
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("Food")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-violet-300 w-full min-h-48 md:min-h-72 rounded-md"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white">
              Food
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("Money")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-violet-300 w-full min-h-48 md:min-h-72 rounded-md md:col-span-2 lg:col-span-1 lg:row-span-2"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white">
              Money
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("Programming")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-violet-300 w-full min-h-48 md:min-h-72 rounded-md lg:col-span-2"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white">
              Programming
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("Videogames")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-violet-300 w-full min-h-48 md:min-h-72 rounded-md"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white">
              Videogames
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setSelectedCategory("Music")}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-violet-300 w-full min-h-48 md:min-h-72 rounded-md md:col-span-2"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white">
              Music
            </h2>
          </Link>
        </div>
        <Link to="/catalog" className="w-1/2 self-center">
          <Button className="w-full" size="lg">
            More categories
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeCategoriesSection;
