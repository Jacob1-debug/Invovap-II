import React from "react";

function index() {
  return (
    <>
      <h2 className="m-16 text-center text-[20px] AllertaStencil_font">
        Welcome to Our Candidates page
      </h2>
      <div className="flex  justify-between mx-16 gap-8">
        <div>
          <img className="flex mx-auto" src="/images/candidate1.svg" />
          <p className="text-[#1D8346] text-2xl text-center my-4">About Her</p>
          <p className="Actor_font text-2xl text-center mx-16 text-[#838383]">
            Set up a beautiful branded careers page without any technical
            support and have jobs updated automatically every time you create a
            new position.
          </p>
          <button className="my-6 flex gap-2 justify-center mx-auto w-[182px] bg-white border p-1 ">
            <img src="/images/snap.svg"/><p className="flex my-auto">Snap</p>
          </button>
        </div>
        <div>
          <img className="flex  mx-auto" src="/images/candidate2.svg" />
          <p className="text-[#1D8346] text-2xl text-center my-4">About Him</p>
          <p className="Actor_font text-2xl text-center mx-16 text-[#838383]">
            Set up a beautiful branded careers page without any technical
            support and have jobs updated automatically every time you create a
            new position.
          </p>
          <button className="my-6 flex gap-2 justify-center mx-auto w-[182px] bg-white border p-1 ">
            <img src="/images/snap.svg"/><p className="flex my-auto">Snap</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default index;
