import React from "react";

function index() {
  return (
    <div className="mt-16">
      <h2 className="text-center AllertaStencil_font md:text-[28px] text-[24px]">
        Welcome to Our About page
      </h2>
      <div className="md:flex xl:gap-24 lg:gap-8 gap-4 justify-center md:m-4">
        <div className=" bg-[#F7FAFD] lg:p-6 p-4 py-10 xl:w-[365px] lg:w-[300px]">
          <img
            width={200}
            className="flex mx-auto"
            src="/images/About_img1.svg"
          />
          <p
            className="lg:text-[20px] text-[18px] my-3 text-center py-2 
AllertaStencil_font"
          >
            Make everyone feel included
          </p>
          <p className="Actor_font lg:text-[24px] text-[20px] text-[#838383]">
            This I choose to do. If there is a price, this I choose to pay. If
            it is my death, then I choose to die. Where this takes me, there I
            choose to go. I choose. This I choose to do
          </p>
        </div>
        <div className=" bg-[#F7FAFD] p-6 py-10 xl:w-[365px] lg:w-[300px] ">
          <img
            width={250}
            className="flex mx-auto"
            src="/images/About_img2.svg"
          />
          <p
            className="lg:text-[20px] my-4 text-[18px] text-center 
AllertaStencil_font"
          >
            We advice Voters on what to expect in polling stations
          </p>
          <p className="Actor_font lg:text-[24px] text-[20px] text-[#838383]">
            This I choose to do. If there is a price, this I choose to pay. If
            it is my death, then I choose to die. Where this takes me, there I
            choose to go. I choose. This I choose to do
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
