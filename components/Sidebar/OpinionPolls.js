import React from "react";

function OpinionPolls() {
  return (
    <div className="h-screen xl:mt-36 lg:mt-8 fixed mx-8">
      <div className="h-20 rounded-full bg-[#D9D9D9] xl:w-[316px] lg:w-[220px] flex xl:px-8 lg:px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex my-auto">
            <img src="/images/alert-triangle.svg" />
          </div>
          <h2 className="flex my-auto w-[80%] font-in">
            Opinion Polls are Open! Please go to the vote tab to vote!
          </h2>
        </div>
      </div>
      <div className="flex  justify-center xl:mt-[54px] lg:mt-[30px]">
        <img width={300} height={202} src="/images/flag.svg" />
      </div>
    </div>
  );
}

export default OpinionPolls;
