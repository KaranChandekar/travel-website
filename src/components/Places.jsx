import React from "react";

const Places = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
        <h1 className="text-4xl font-bold">Places not to be missed</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, a
          quibusdam. Et nostrum accusamus sunt fugiat, corrupti aut sint totam.
        </p>
      </div>

      <div className="block md:grid grid-rows-2 grid-flow-col gap-4 w-full h-[300px] md:h-[450px] pb-10 border-b">
        <div className="row-span-1 col-span-2">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/image-2.jpg"
            alt=""
          />
        </div>

        <div className="row-span-1 col-span-1">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/image-3.jpg"
            alt=""
          />
        </div>

        <div className="row-span-1 col-span-1">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/desert.jpg"
            alt=""
          />
        </div>

        <div className="row-span-2 col-span-1">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/city.jpg"
            alt=""
          />
        </div>

        <div className="row-span-1 col-span-1">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/image.jpg"
            alt=""
          />
        </div>

        <div className="row-span-1 col-span-1">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/doha.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Places;
