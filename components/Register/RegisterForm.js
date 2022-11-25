import Link from "next/link";
import React from "react";
import { useState } from "react";
function RegisterForm() {
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
              for="inline-Name"
            >
              NAME
            </label>
          </div>
          <div class="md:w-2/3 Actor_font">
            <input
              class="bg-white rounded focus:outline-none w-full p-2 py-3 "
              id="inline-Name"
              type="text"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="AbrilFatface_font text-[#676767] text-[18px]"
              for="inline-date"
            >
              GENDER
            </label>
          </div>
          <div class="md:w-2/3 Actor_font">
          <div class="flex ">
  <div class="form-check form-check-inline">
    <input class=" form-check-input appearance-none mt-1 rounded-full h-4 w-4 border border-black bg-white checked:bg-blue-600  bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
    <label class="form-check-label inline-block " for="inlineRadio10">Male</label>
  </div>
  <div class="form-check form-check-inline">
    <input class=" form-check-input appearance-none mt-1 rounded-full h-4 w-4 border border-black bg-white checked:bg-blue-600  bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
    <label class="form-check-label inline-block " for="inlineRadio20">Female</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input  mt-1 appearance-none rounded-full h-4 w-4 border border-black bg-white  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
    <label class="form-check-label inline-block " for="inlineRadio30">Other</label>
  </div>
</div>
          </div>
        </div>
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
              for="inline-date"
            >
              GENDER
            </label>
          </div>
          <div class="md:w-2/3 Actor_font">
          <div class="flex ">
  <div class="form-check form-check-inline">
    <input class=" form-check-input appearance-none mt-1 rounded-full h-4 w-4 border border-black bg-white checked:bg-blue-600  bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
    <label class="form-check-label inline-block " for="inlineRadio10">Male</label>
  </div>
  <div class="form-check form-check-inline">
    <input class=" form-check-input appearance-none mt-1 rounded-full h-4 w-4 border border-black bg-white checked:bg-blue-600  bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
    <label class="form-check-label inline-block " for="inlineRadio20">Female</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input  mt-1 appearance-none rounded-full h-4 w-4 border border-black bg-white  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
    <label class="form-check-label inline-block " for="inlineRadio30">Other</label>
  </div>
</div>
          </div>
        </div>
        
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="AbrilFatface_font text-[#676767] text-[18px]"
              for="inline-contact"
            >
              EMAIL
            </label>
          </div>
          <div class="md:w-2/3 Actor_font">
            <input
              class="bg-white rounded focus:outline-none w-full p-2 py-3 "
              id="inline-contact"
              type="Email"
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
             Register Now
            </button>
            <p className="my-12 text-[20px]"> Or have an account <Link className="text-[#30429F]" href="/Login">Sign IN</Link></p>
          </div>
        </div>
      </form>
     
    </div>
  );
}

export default RegisterForm;