import React from "react";

const Discover = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <h1 className="text-4xl font-bold text-center">Discover</h1>
      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-full space-y-5">
          <img
            className="w-full drop-shadow-2xl rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/safari_desert.jpg"
            alt=""
          />
          <div>
            <h2 className="font-bold">Lorem, ipsum dolor.</h2>
            <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet.</h1>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos in
            consectetur eius tempora qui aperiam error natus iste architecto
            distinctio ea inventore iusto quos ullam fuga doloremque quod dicta
            libero non maiores, deleniti atque cumque? Et rerum animi quibusdam
            laboriosam!
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos in
            consectetur eius tempora qui aperiam error natus iste architecto
            distinctio ea inventore iusto quos ullam fuga doloremque quod dicta
            libero non maiores, deleniti atque cumque? Et rerum animi quibusdam
            laboriosam!
          </p>
        </div>
        <div className="w-full space-y-4 text-left">
          <h2 className="font-bold">Lorem ipsum dolor sit.</h2>
          <h1 className="font-bold text-2xl">Lorem ipsum dolor sitamet.</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            assumenda rem, autem accusamus magni nam culpa aut perspiciatis,
            totam beatae reiciendis repellendus eligendi? Qui. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Delectus assumenda rem, autem
            accusamus magni nam culpa aut perspiciatis, totam beatae reiciendis
            repellendus eligendi? Qui.
          </p>
          <img
            className="drop-shadow-2xl border-8 border-stones-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/desert.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-[400px] my-10 relative">
        <img
          className="w-full h-full object-cover "
          src="images/image-8.jpg"
          alt=""
        />
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold px-5 py-2 border cursor-pointer hover:bg-white hover:text-gray-500 hover:duration-300">
            View Details
          </h1>
        </div>
      </div>

      <div className="my-20 flex justify-between items-center xl:h-[500px]">
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="images/image-33.jpg"
            alt=""
          />
        </div>
        <div className="xl:w-[500px] p-5 text-center space-y-5 sm:space-y-2">
          <h1 className="md:text-xl sm:text-sm">Lorem ipsum dolor sit.</h1>
          <h2 className="md:text-4xl sm:text-base">
            Lorem ipsum dolor sitamet.
          </h2>
          <p className="md:text-base sm:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem
            perspiciatis quod.orem ipsum dolor sit amet consectetur adipisicing
            elit. Tempore rem perspiciatis quod.
          </p>
          <button className="mt-5 px-5 py-2 border border-black hover:bg-gray-400 hover:duration-300">
            Book Now
          </button>
        </div>
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="images/image-33.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
