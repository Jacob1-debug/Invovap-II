import React from "react";

function OpinionPolls() {
  return (
    <div className="h-screen xl:mt-24 mt-16 fixed ">
      <div className="h-20 rounded-full bg-[#D9D9D9] xl:w-[316px] lg:w-[220px] md:w-[190px]  flex xl:px-8 px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex my-auto">
            <img src="/images/alert-triangle.svg" />
          </div>
          <h2 className="flex my-auto w-[80%] lg:text-base text-sm">
            Opinion Polls are Open! Please go to the vote tab to vote!
          </h2>
        </div>
      </div>
      <div className="flex  justify-center xl:mt-[54px] mt-[30px] xl:mx-0 mx-4">
        <img width={300} height={202} src="/images/flag.svg" />
      </div>
    </div>
  );
}

export default OpinionPolls;
