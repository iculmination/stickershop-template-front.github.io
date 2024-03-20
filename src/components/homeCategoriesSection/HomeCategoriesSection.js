import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeCategoriesSection = ({ setOptions }) => {
  return (
    <section className="container pt-6 pb-6 w-full">
      <motion.div
        className="bg-white min-h-96 rounded-md w-full flex flex-col pb-6"
        initial={{ opacity: 0, translateY: 1000 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="text-2xl md:text-4xl pl-10 pt-8 text-[#728299]">
          Available stickers categories
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          <Link
            to="/catalog"
            onClick={() => setOptions({ category: "Animals" })}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-[url('https://i0.wp.com/creativenerds.co.uk/wp-content/uploads/2016/06/wild-animal-pattern.png?resize=640%2C788')] w-full min-h-48 md:min-h-72 rounded-md"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white bg-gradient-to-r rounded-t-md from-violet-500 via-violet-300 to-transparent">
              Animals
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setOptions({ category: "Food" })}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-[url('https://d29fhpw069ctt2.cloudfront.net/photo/52117/preview/npreview_1280x1280.jpg')] w-full min-h-48 md:min-h-72 rounded-md"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white bg-gradient-to-r rounded-t-md from-violet-500 via-violet-300 to-transparent">
              Food
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setOptions({ category: "Money" })}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-[url('https://static.vecteezy.com/system/resources/thumbnails/001/988/451/small/seamless-money-background-vector.jpg')] w-full min-h-48 md:min-h-72 rounded-md md:col-span-2 lg:col-span-1 lg:row-span-2"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white bg-gradient-to-r rounded-t-md from-violet-500 via-violet-300 to-transparent">
              Money
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setOptions({ category: "Programming" })}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-[url('https://cdn.dribbble.com/users/822246/screenshots/3178778/media/3288478ee59ac4bba6527348a57199ef.jpg?resize=400x300&vertical=center')] w-full min-h-48 md:min-h-72 rounded-md lg:col-span-2"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white bg-gradient-to-r rounded-t-md from-violet-500 via-violet-300 to-transparent">
              Programming
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setOptions({ category: "Videogames" })}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-[url('https://i.etsystatic.com/19543171/r/il/681e67/2109019559/il_570xN.2109019559_3oca.jpg')] w-full min-h-48 md:min-h-72 rounded-md"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white bg-gradient-to-r rounded-t-md from-violet-500 via-violet-300 to-transparent">
              Videogames
            </h2>
          </Link>
          <Link
            to="/catalog"
            onClick={() => setOptions({ category: "Music" })}
            className="cursor-pointer transition duration-300 hover:bg-violet-400 hover:scale-[102%] bg-[url('https://cdn.dribbble.com/users/10549/screenshots/2478092/media/6a3f3b64d64a268355382c4f63ad1c47.jpg?resize=400x300&vertical=center')] w-full min-h-48 md:min-h-72 rounded-md md:col-span-2"
          >
            <h2 className="text-xl md:text-3xl font-bold p-8 text-white bg-gradient-to-r rounded-t-md from-violet-500 via-violet-300 to-transparent">
              Music
            </h2>
          </Link>
        </div>
        <Link to="/catalog" className="w-1/2 self-center">
          <Button className="w-full" size="lg">
            More categories
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default HomeCategoriesSection;
