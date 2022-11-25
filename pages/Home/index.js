import React from "react";
import GetInTouch from "../../components/Home/GetInTouch";
import ResultSection from "../../components/Home/ResultSection";
import { TypeAnimation } from 'react-type-animation';
function index() {
  
  return (
    <div className="xl:mx-16 lg:mx-12">
      <h2 className="xl:text-[96px] md:text-[70px] text-[40px] AllertaStencil_font text-center mb-8">
        <TypeAnimation
      sequence={[
        'INFO - VAP', // Types 'One'
        5000, // Waits 1s
        '', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        ' ', // Types 'Three' without deleting 'Two'
       
      ]}
     
      cursor={true}
      repeat={Infinity}
      
    />
      </h2>
      <div className="Actor_font flex flex-col gap-8 text-2xl">
        <p>
          A stone hand-picked from the river Thames and brought to Flat 8. Fresh
          handmade pizzas can be made on this stone provided the oven
          temperature can be regulated. Note: stones do not catch fire (unlike
          cardboard takeout boxes housing fish and chips and/or electric kettles
          turned on by placing them on stoves).{" "}
        </p>
        <p>
          A stone hand-picked from the river Thames and brought to Flat 8. Fresh
          handmade pizzas can be made on this stone provided the oven
          temperature can be regulated. Note: stones do not catch fire (unlike
          cardboard takeout boxes housing fish and chips and/or electric kettles
          turned on by placing them on stoves).
        </p>
        <p>
          A stone hand-picked from the river Thames and brought to Flat 8. Fresh
          handmade pizzas can be made on this stone provided the oven
          temperature can be regulated. Note: stones do not catch fire (unlike
          cardboard takeout boxes housing fish and chips and/or electric kettles
          turned on by placing them on stoves).
        </p>
      </div>
      <ResultSection/>
      <GetInTouch/>
    </div>
  );
}

export default index;
