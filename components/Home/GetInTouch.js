import React from "react";

function GetInTouch() {
  return (
    <>
      <div className="lg:flex gap-6 justify-center">
        <div className="lg:w-2/6 w-full">
          <p className="text-[42px] Allura_font mx-4 lg:text-left text-center">
            Get In Touch With Us
          </p>
          <img
            className="lg:block hidden lg:my-0 my-4"
            src="/images/Dots_Shape.svg"
          />
        </div>
        <div className="lg:w-4/6 w-full ">
          <form className="w-full AkayaKanadaka_font text-lg bg-white p-4">
            <div className="flex items-center border-b border-teal-500 py-6">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Name"
                aria-label="Full name"
              />
            </div>
            <div className="flex items-center border-b border-teal-500 py-6">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Email"
                aria-label="Full name"
              />
            </div>
            <div className="flex items-center border-b border-teal-500 py-6 ">
              <textarea
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-6 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Message"
                aria-label="Full name"
              />
            </div>
            <button
              className=" my-6 mb-4 w-[139px] h-[54px] bg-[#1D8346]  rounded-lg Cabin_font text-white"
              type="button"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
