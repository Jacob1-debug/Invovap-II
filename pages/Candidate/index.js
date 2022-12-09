
import React from "react"; 
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
 export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","Header","navbar","Home","footer","candidate"])),
      // Will be passed to the page component as props
    },
  };
}

function Candidate() {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="md:m-16 m-8 text-center text-[20px] AllertaStencil_font">
      {t("candidate:heading")}
      </h2>
      <div className="md:flex justify-between xl:mx-16 mx-4 gap-8">
        <div>
          <img className="flex mx-auto" src="/images/candidate1.svg" />
          <p className="text-[#1D8346] md:text-2xl text-xl text-center my-4">
          
            {t("candidate:cardHeading1")}
            </p>
          <p className="Actor_font md:text-2xl text-xl text-center xl:mx-16 text-[#838383]">
           {t("candidate:cardText1")}
          </p>
          <button className="my-6 flex gap-2 justify-center mx-auto w-[182px] bg-white border p-1 ">
            <img src="/images/snap.svg"/><p className="flex my-auto">{t("candidate:cardBtn1")}</p>
          </button>
        </div>
        <div>
          <img className="flex  mx-auto" src="/images/candidate2.svg" />
          <p className="text-[#1D8346] md:text-2xl text-xl text-center my-4">{t("candidate:cardHeading2")}</p>
          <p className="Actor_font md:text-2xl text-xl text-center xl:mx-16 text-[#838383]">
          {t("candidate:cardText2")}
          </p>
          <button className="my-6 flex gap-2 justify-center mx-auto w-[182px] bg-white border p-1 ">
            <img src="/images/snap.svg"/><p className="flex my-auto">{t("candidate:cardBtn2")}</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Candidate;

