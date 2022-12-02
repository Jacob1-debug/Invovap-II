import React from "react";

function ResultSection() {
  return (
    <>
      <div className="md:flex gap-6 justify-between w-full lg:my-20 md:my-12 my-6 Actor_font ">
        <div className="md:w-4/6 w-full ">
          <h2 className="md:text-[33px] text-[40px] AllertaStencil_font text-center ">
            Results
          </h2>
          <div className="md:pt-16 pt-6 flex flex-col gap-2  md:text-2xl text-xl text-justify ">
            <p className="">
              {" "}
              When it comes to the power of the vote, it can make a huge difference in any country. In Kenya, for example, voting is crucial for ensuring that all citizens’ voices are heard. By utilizing the power of our voting app, 
              we have seen the results of increased participation in elections, which has led to more cohesion, 
              peace, and unity in the country. {" "}
            </p>
            <p className="">
            The app has helped to bring people together across party lines and create a sense of belonging within the country. With the app, citizens can easily access information about candidates and issues to inform their decision making.
             Furthermore, it encourages voters to take part in the democratic process by providing a secure platform to cast their vote without any fear or intimidation. {" "}
            </p>
            <p className="">
            The app has also given Kenyans an easier way to register to vote. With only a few clicks, they can register and be ready to cast their ballots. 
            This has resulted in a dramatic increase in voter turnout, which is essential for a healthy democracy. {" "}
            </p>
            <p className="">
            Not only has our app had a positive effect on voter turnout and engagement, but it has also helped to reduce election-related violence. By providing an accessible platform for people to express their opinions and take part in the electoral process,
             we have been able to bring about positive change within the country. {" "}
            </p>
            <p className="">
              {" "}
              Ultimately, our voting app has had an incredibly positive impact on Kenya’s democracy. It has shown that when people are empowered to make their voices heard, great things can happen. We are proud to be part of this important movement
               for democracy and hope that our app will continue to make a positive difference in the lives of Kenyans for years to come.
            </p>
          </div>
          <p className="mt-8 text-[#1D8346] Cabin_font text-xl">
            {" "}
            Get the Case Study
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
                <p className="md:w-24 Cabin_font lg:text-[22px] text-lg lg:text-left text-center">MORE COHESION</p>
              </div>
            </div>
            <div className="bg-[#F04C4B] h-[180px] items-center flex justify-center">
              <div>
                {" "}
                <p className="flex justify-center ABeeZee_font xl:text-[32px] lg:text-2xl text-[32px]">
                  20x
                </p>
                <p className="w-full xl:mx-6 lg:mx-2 Cabin_font lg:text-[22px] text-lg lg:text-left text-center">
                  MORE LIKELY TO BE PEACE
                </p>
              </div>
            </div>
            <div className="bg-[#1D8346] h-[180px] items-center flex justify-center">
              <div>
                {" "}
                <p className="flex justify-center ABeeZee_font xl:text-[32px] lg:text-2xl text-[32px]">
                  20x
                </p>
                <p className="w-full xl:mx-6 lg:mx-2 Cabin_font lg:text-[22px] text-lg lg:text-left text-center">     
                  MORE LIKELY TO INCREASE TOGETHERNESS
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
