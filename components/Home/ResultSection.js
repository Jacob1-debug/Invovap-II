import React from "react";

function ResultSection() {
  return (
    <>
      <div className="md:flex gap-6 justify-between w-full lg:my-20 my-12">
        <div className="md:w-4/6 w-full ">
          <h2 className="md:text-[33px] text-[40px] AllertaStencil_font text-center ">
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
              (unlike cardboard takeout boxes housing fish and chips and/or.{" "}
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
        <div className="md:w-2/6 w-full text-white mt-6">
          <div>
            <div className="bg-[black] h-[180px] items-center flex justify-center ">
              <div>
                {" "}
                <p className="flex justify-center ABeeZee_font xl:text-[32px] lg:text-2xl">
                  83%
                </p>
                <p className="w-24 Cabin_font lg:text-[22px] text-lg lg:text-left text-center">MORE COHESION</p>
              </div>
            </div>
            <div className="bg-[#F04C4B] h-[180px] items-center flex justify-center">
              <div>
                {" "}
                <p className="flex justify-center ABeeZee_font xl:text-[32px] lg:text-2xl">
                  20x
                </p>
                <p className="w-full xl:mx-6 lg:mx-2 Cabin_font lg:text-[22px] text-lg lg:text-left text-center">
                  MORE LIKELY TO BE PEACE
                </p>
              </div>
            </div>
            <div className="bg-[#1D8346] h-[180px] items-center flex justify-center">
              <div>
                {" "}
                <p className="flex justify-center ABeeZee_font xl:text-[32px] lg:text-2xl">
                  20x
                </p>
                <p className="w-full xl:mx-6 lg:mx-2 Cabin_font lg:text-[22px] text-lg lg:text-left text-center">     
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
