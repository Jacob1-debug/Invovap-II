import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function Footer() {
  const router = useRouter();
  return (
    <div className="my-6 px-8 z-20 ">
      <div className="md:flex justify-between border-b">
        <h2 className="LeckerliOne_font xl:text-[70px] text-[50px] flex md:justify-start justify-center">
          <span className="text-[#1D8346]">I</span>
          <span className="text-[#354253]">Vap</span>
        </h2>
        <div className="flex my-auto md:mx-0 mx-auto md:justify-end justify-center">
          <ul className="flex md:gap-24 gap-8 my-auto text-[20px]">
         
          <Link className="AkayaKanadaka_font" href="/">
            <div
              className={`${
                router.asPath === "/" && "Allura_font text-[#1D8346]"
              } `}
            >
              <span>Home</span>
            </div>
          </Link>
      
           
            <Link  className="AkayaKanadaka_font" href="/About">
            <div
              className={`${
                router.asPath === "/About" && "Allura_font text-[#1D8346]"
              } `}
            >
              <span>About</span>
            </div>
          </Link>
                
          <Link  className="AkayaKanadaka_font" href="/Contact">
            <div
              className={`${
                router.asPath === "/Contact" && "Allura_font text-[#1D8346]"
              } `}
            >
              <span>Contact</span>
            </div>
          </Link>
      
          </ul>
        </div>
      </div>
      <div className="md:flex justify-between xl:mt-10 mt-4 ">
        <h2 className="Cabin_font text-sm flex items-end ">
          @ All right reserved 2022 Design By Rotich Jacob
        </h2>

        <div className="flex md:gap-10 justify-between md:mt-0 m-6">
          <p className="AkayaKanadaka_font flex my-auto"> FOLLOW US</p>
          <img className="w-8" src="/images/googleDrive.svg" />
          <img className="w-8" src="/images/Instagram.svg" />
          <img className="w-8" src="/images/Instagram.svg" />
          <img className="w-8" src="/images/Facebook.svg" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
