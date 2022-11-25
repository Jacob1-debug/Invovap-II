import React from "react";

function Footer() {
  return (
    <div className="my-6 px-8 z-20 ">
      <div className="flex justify-between border-b">
        <h2 className="LeckerliOne_font text-[78px]">
          <span className="text-[#1D8346]">I</span>
          <span className="text-[#354253]">Vap</span>
        </h2>
        <div className="flex my-auto">
          <ul className="flex gap-24 my-auto text-[20px]">
            <li className="Allura_font text-[#1D8346]">Home</li>
            <div className="AkayaKanadaka_font flex gap-24">
              <li>About</li>
              <li>Contact</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-10 ">
        <h2 className="Cabin_font text-sm ">
          @ All right reserved 2022 Design By Rotich Jacob
        </h2>

        <div className="flex gap-10">
          <p className="AkayaKanadaka_font flex my-auto"> FOLLOW US</p>
          <img src="/images/googleDrive.svg" />
          <img src="/images/instagram.svg" />
          <img src="/images/instagram.svg" />
          <img src="/images/facebook.svg" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
