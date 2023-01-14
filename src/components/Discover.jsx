import React from "react";

const Discover = () => {
  return (
    <React.Fragment>
      <h1 className="text-4xl font-bold text-center">Discover</h1>
      <div className="w-4/5 xl:w-9/12 m-auto flex flex-col sm:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-[500px] space-y-5">
          <img
            className="drop-shadow-2xl rounded-lg border-8 border-stones-700"
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
        <div className="w-[500px] space-y-4 text-left">
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
            className="drop-shadow-2xl border-8 border-stones-700 rounded-lg"
            src="images/desert.jpg"
            alt=""
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Discover;
