import React from "react";

function ResultSection() {
  return (
    <>
      <div className="flex gap-6 justify-between w-full my-20">
        <div className="w-4/6 ">
          <h2 className="text-[33px] AllertaStencil_font text-center ">
            Results
          </h2>
          <div className="pt-16 flex flex-col gap-2  text-2xl ">
            <p className="">
              {" "}
              A stone hand-picked from the river Thames and brought to Flat 8.{" "}
            </p>
            <p className="">
              Fresh handmade pizzas can be made on this stone provided the oven{" "}
            </p>
            <p className="">
              temperature can be regulated. Note: stones do not catch fire{" "}
            </p>
            <p className="">
              (unlike cardboard takout boxes housing fish and chips and/or.{" "}
            </p>
            <p className="">
              {" "}
              electric kettles turned on by placing them on stoves)
            </p>
          </div>
          <p className="mt-8 text-[#1D8346] Cabin_font text-xl">
            {" "}
            Get the Case Study
          </p>
        </div>
        <div className="bg-green-500  w-2/6 text-white mt-6">
          <div>
            <div className="bg-[black] h-[180px] items-center flex justify-center ">
              <div>
                {" "}
                <p className="flex justify-center ABeeZee_font xl:text-[32px] lg:text-2xl">
                  83%
                </p>
                <p className="w-24 Cabin_font text-[22px]">MORE COHESION</p>
              </div>
            </div>
            <div className="bg-[#F04C4B] h-[180px] items-center flex justify-center">
              <div>
                {" "}
                <p className="flex justify-center ABeeZee_font xl:text-[32px] lg:text-2xl">
                  20x
                </p>
                <p className="w-full xl:mx-6 lg:mx-2 Cabin_font text-[22px]">
                  MORE LIKELY TO BE PEACE
                </p>
              </div>
            </div>
            <div className="bg-[#1D8346] h-[180px] items-center flex justify-center">
              <div>
                {" "}
                <p className="flex justify-center ABeeZee_font text-[32px]">
                  20x
                </p>
                <p className="w-full mx-6 Cabin_font text-[22px]">
                  MORE LIKELY TO BE PEACE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultSection;
