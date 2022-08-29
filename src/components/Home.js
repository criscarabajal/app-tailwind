import React from "react";
import ItemListConteiner from "./ItemListConteiner";

const Home = () => {
  return (
    <div>
      <section>
        <div className="w-full relative pb-10 px-6 xl:px-0">
          <img
            className="absolute w-full inset-0 h-full object-cover object-center"
            src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
            alt="we care family"
          />
          <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <img
                tabIndex="0"
                role="img"
                aria-label="people smiling"
                className="mx-auto"
                src="https://i.imgur.com/kr1VL6N.png"
                alt="people smiling"
              />
            </div>
            <div role="contentinfo" className="w-full lg:w-1/2 h-full ml-5">
              <p
                tabIndex="0"
                className="text-indigo-700 uppercase text-2xl mb-4"
              >
                Tu tienda online
              </p>
              <h1
                tabIndex="0"
                className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8"
              >
                React Js & Tailwind
              </h1>
              <p tabIndex="0" className="text-gray-800 font-regular mb-8">
                COMBINING SCIENCE WITH BEAUTY. L'Oreal Paris offerincare
                products is developed and rigorously tested with leading
                scientists. Indulge yourself in a luxurious and sensorial
                skincare experience. Cutting-edge innovations, proven by
                Science.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ItemListConteiner />
    </div>
  );
};
export default Home;
