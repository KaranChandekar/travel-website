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

      <nav className="">
        <div>
          <h1>قطر</h1>
        </div>

        <div>
          <ul>
            <li>Doha</li>
            <li>Al Wakrah</li>
            <li>Al Rayan</li>
            <li>Al Khor</li>
          </ul>
          <div>
            <AiOutlineSearch />
            <input type="text" />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Home;
