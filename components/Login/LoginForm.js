import Link from "next/link";
import React from "react";
import { useState } from "react";
function LoginForm() {
  const [showAll, setShowAll] = useState(false);
  const [selectValue, setSelectValue] = useState("DISTRICT");
  const dropdown = [
    {
      text: "All",
    },
    {
      text: "Inprogress",
    },
    {
      text: "Complete",
    },
  ];
  return (
    <div>
      <form class="w-full max-w-xl">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="AbrilFatface_font text-[#676767] text-[18px]"
              for="inline-date"
            >
              DATE OF BIRTH
            </label>
          </div>
          <div class="md:w-2/3 Actor_font">
            <input
              class="bg-white rounded focus:outline-none w-full p-2 py-3 "
              id="inline-date"
              type="date"
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="AbrilFatface_font text-[#676767] text-[18px]"
              for="inline-contact"
            >
              CONTACT
            </label>
          </div>
          <div class="md:w-2/3 Actor_font">
            <input
              class="bg-white rounded focus:outline-none w-full p-2 py-3 "
              id="inline-contact"
              type="text"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="AbrilFatface_font text-[#676767] text-[18px]"
              for="inline-password"
            >
              DISTRICT OF VOTE REGISTRATION
            </label>
          </div>
          <div class="md:w-2/3 Actor_font">
            <div className="flex justify-between gap-4 ">
              <div className=" w-full ">
                <div className="relative  text-[#333333]">
                  <div
                    className=" cursor-pointer w-full flex items-center justify-between  bg-white rounded  px-3 py-3.5 "
                    onClick={() => setShowAll(!showAll)}
                  >
                    <p className="text-sm  ">{selectValue}</p>
                    <img
                      src="/images/down-arrow.png"
                      alt="down-arrow"
                      className={showAll == true && "rotate-180"}
                    />
                  </div>
                  <ul
                    className={`text-sm max-w-full z-20 shadow-[0px_3px_12px_#00000026]  
                  rounded-b  absolute left-0 right-0 top-[49px]  bg-white ${
                    showAll == false ? "hidden" : "block"
                  }`}
                  >
                    {dropdown.map((val, key) => {
                      return (
                        <>
                          <div onClick={() => setShowAll(!showAll)}>
                            <li
                              className="mt-[6px] relative  px-2 cursor-pointer flex py-2.5  justify-between  border-b border-[#E2E2E2]"
                              key={key}
                              onClick={() => setSelectValue(val.text)}
                            >
                              {val.text}
                            </li>
                          </div>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="AbrilFatface_font text-[#676767] text-[18px]"
              for="Vote"
            >
              Password
            </label>
          </div>
          <div class="md:w-2/3 Actor_font">
            <input
              class="bg-white rounded focus:outline-none w-full p-2 py-3 "
              id="Vote"
              type="text"
            />
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3 Actor_font">
            <button
              class="w-[255px] h-[70px] text-center rounded-lg bg-white 
              AkayaKanadaka_font text-[26px]"
              type="button"
            >
              Log In
            </button>
            <p className="my-12 text-[20px]"> Or Don’t have an account, <Link className="text-[#30429F]" href="/Register">Sign UP</Link></p>
          </div>
        </div>
      </form>
     
    </div>
  );
}

export default LoginForm;
