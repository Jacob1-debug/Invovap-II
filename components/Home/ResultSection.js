import { useTranslation } from "next-i18next";
import React from "react";

function ResultSection() {
  const {t}=useTranslation();
  return (
    <>
      <div className="md:flex gap-6 justify-between w-full lg:my-20 md:my-12 my-6 Actor_font ">
        <div className="md:w-4/6 w-full ">
          <h2 className="md:text-[33px] text-[40px] AllertaStencil_font text-center ">
            {(t("Home:result-heading"))}
          </h2>
          <div className="md:pt-16 pt-6 flex flex-col gap-2  md:text-2xl text-xl text-justify ">
            <p className="">
            {(t("Home:result-1Paragraph"))}
            </p>
            <p className="">
            {(t("Home:result-2Paragraph"))}  </p>
            <p className="">
            {(t("Home:result-3Paragraph"))}  </p>
            <p className="">
            {(t("Home:result-4Paragraph"))}
            </p>
            <p className="">
              {" "}
              {(t("Home:result-5Paragraph"))}     </p>
          </div>
          <p className="mt-8 text-[#1D8346] Cabin_font text-xl">
            {" "}
            {(t("Home:Get-the-Case-Study"))}
          </p>
        </div>
        <div className="md:w-2/6 w-full text-white mt-6">
          <div>
            <div className="bg-[black] h-[180px] items-center flex justify-center ">
              <div>
                {" "}
                <p className="flex justify-center ABeeZee_font xl:text-[32px] lg:text-2xl text-[32px]">
                  83%
                </p>
                <p className="md:w-28 Cabin_font lg:text-[22px] text-lg lg:text-left text-center">{t("Home:MORE-COHESION")}</p>
              </div>
            </div>
            <div className="bg-[#F04C4B] h-[180px] items-center flex justify-center">
              <div>
                {" "}
                <p className="flex justify-center ABeeZee_font xl:text-[32px] lg:text-2xl text-[32px]">
                  20x
                </p>
                <p className="w-full xl:mx-2 lg:mx-2 Cabin_font lg:text-[22px] text-lg lg:text-left text-center">
                 {t("Home:MORE-LIKELY")}
                </p>
              </div>
            </div>
            <div className="bg-[#1D8346] h-[180px] items-center flex justify-center">
              <div>
                {" "}
                <p className="flex justify-center ABeeZee_font xl:text-[32px] lg:text-2xl text-[32px]">
                  20x
                </p>
                <p className="w-full xl:mx-2 lg:mx-2 Cabin_font lg:text-[22px] text-lg lg:text-left text-center">     
                  {t("Home:INCREASE-TOGETHERNESS")}
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
