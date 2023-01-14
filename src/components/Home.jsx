import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineSearch,
} from "react-icons/ai";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-screen relative">
        <img
          src="images/mesuem.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <nav className="w-full absolute top-0 p-5 flex justify-between text-white z-10">
        <div>
          <h1 className="text-3xl font-bold">قطر</h1>
        </div>

        <div>
          <ul className="flex space-x-5 font-bold cursor-pointer text-gray-300">
            <li className="hover:text-white">Doha</li>
            <li className="hover:text-white">Al Wakrah</li>
            <li className="hover:text-white">Al Rayan</li>
            <li className="hover:text-white">Al Khor</li>
          </ul>

          <div className="flex items-center space-x-2 mt-5">
            <AiOutlineSearch className="text-xl cursor-pointer" />

            <input
              className="bg-inherit border-b outline-0 border-gray-300 p-1 w-full"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
      </nav>

      <div>
        <div>
          <h2>D I S C O V E R</h2>
          <h1>Q A T A R</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam
            consequatur, necessitatibus dolorem, provident voluptas esse
            recusandae impedit distinctio laboriosam modi a nulla ratione
            quaerat?
          </p>
        </div>

        <div>
          <button>Road Map</button>
          <button>Book a Trip</button>
        </div>

        <div>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterSquare />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
