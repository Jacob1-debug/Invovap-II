import "../styles/globals.css";
import Script from "next/script";
import Header from "../components/Layout/Header";
import OpinionPolls from "../components/Sidebar/OpinionPolls";
import ElectoralLaw from "../components/Sidebar/ElectoralLaw";
import Login from "../pages/Login"
import Footer from "../components/Layout/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      <Header />
    {/* <Login/> */}
      <div className="flex justify-between ">
        <div className="w-[15%] xl:mt-36 lg:mt-8 bg-[#f3f2f2da] ">
          <ElectoralLaw />
          <h2 className='AllertaStencil_font xl:text-[32px] lg:text-[24px] my-8 underline fixed mt-36'>Electoral 
Law</h2>
        </div>
        <div className="w-[60%] ">
          {/* For login need to keep the w-[100%] */}
          <Component {...pageProps} />
        </div>
        <div className=" w-[25%]  bg-[#f3f2f2da] ">
          <OpinionPolls />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default MyApp;
