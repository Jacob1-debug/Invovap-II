import React from 'react'
import ElectoralLaw from '../Sidebar/ElectoralLaw'
import Link from 'next/link'
function AccountSidebar() {
  

  return (
    <div className='flex flex-col md:gap-44 gap-8'>
      {/* <Link className="Cabin_font text-xl" href="/constitution">
            
          
            <p className="mt-8 text-[#1D8346]  underline">
          {" "}
          Get the Case Study
        </p>
         
        </Link> */}
      <Link href="/constitution">
      <div className=" ">
          <ElectoralLaw />
          </div>
          </Link>

          
          
          <div className="mx-8">
            <p className="AdventPro_font text-[32px] text-center">Account</p>
            <div className="h-20 my-4 rounded-full bg-[#D9D9D9] md:w-[316px] flex px-8 mx-auto">
              <div className="flex justify-between">
                <div className="flex my-auto">
                  <img src="/images/alert-triangle.svg" />
                </div>
                <h2 className="flex my-auto w-[80%] ">
                  Opinion Polls are Open! Please go to the vote tab to vote!
                </h2>
              </div>
            </div>
          </div>
        
    </div>
  )
}

export default AccountSidebar