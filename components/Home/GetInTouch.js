import React from "react";

function GetInTouch() {
  return (
    <>
      <div className="flex gap-6 justify-center">
        <div className="w-2/6">
          <p className="text-[42px] Allura_font mx-4">Get In Touch With Us</p>
          <img src="/images/Dots_Shape.svg"/>
        </div>
        <div className="w-4/6 ">
        <form class="w-full AkayaKanadaka_font text-lg bg-white p-4">
  <div class="flex items-center border-b border-teal-500 py-6">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Name" aria-label="Full name"/>
  </div>
  <div class="flex items-center border-b border-teal-500 py-6">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Full name"/>
  </div>
  <div class="flex items-center border-b border-teal-500 py-6 ">
    <textarea class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-6 px-2 leading-tight focus:outline-none" type="text" placeholder="Message" aria-label="Full name"/>
  </div>
  <button class=" my-6 mb-4 w-[139px] h-[54px] bg-[#1D8346]  rounded-lg Cabin_font text-white" type="button">
      SEND
    </button>
    
</form>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
