import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  return (
    <div className=" bg-[#1A1A1A] text-white AbrilFatface_font text-sm">
      <ul className="md:flex justify-around md:h-[32px] h-[60px]">
        <div className="flex items-center justify-center md:gap-14 gap-6">
          {/* <li ><Link href="/">HOME</Link></li> */}
          <Link href="/">
            <div
              className={`active ${
                router.asPath === "/" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>HOME</span>
            </div>
          </Link>
          <Link href="/Candidate">
            <div
              className={`active ${
                router.asPath === "/Candidate" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>CANDIDATE</span>
            </div>
          </Link>
        </div>
        <div className="flex md:gap-14 gap-4 items-center justify-center md:mt-0 mt-2">
        <Link href="/Interactive">
            <div
              className={`active ${
                router.asPath === "/Interactive" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>INTERACTIVE</span>
            </div>
          </Link>
          <Link href="/About">
            <div
              className={`active ${
                router.asPath === "/About" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>ABOUT</span>
            </div>
          </Link>
          <Link href="/Blog">
            <div
              className={`active ${
                router.asPath === "/Blog" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>BLOG</span>
            </div>
          </Link>
          <li className="bg-[#010101] rounded-full p-0.5 px-1 font-sans font-semibold">
            EN
          </li>
          <Link href="/Login">
            <div
              className={`active ${
                router.asPath === "/Login" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>LOGIN</span>
            </div>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
