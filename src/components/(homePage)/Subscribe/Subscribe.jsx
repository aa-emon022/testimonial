import React from "react";

export default function Section() {
 const textName={
  fontFamily: "Poppins, sans-serif", // Use "sans-serif" as a fallback font
  fontWeight: 600,
 }
 const textName1={
  fontFamily: "Avenir, sans-serif", // Use "sans-serif" as a fallback font
  fontWeight: 100,
 }
  return (
    <>
      <div class="flex flex-col items-center md:h-[31.1rem]">
  <div class="relative ml-[.60rem] md:top-[5rem]">
    <div class="pb-[2rem] md:ml-[13rem]">
      <h1 class="text-[#20B15A]" style={textName}>SUBSCRIBE</h1>
    </div>
    <div class="md:ml-[3rem] md:text-[2rem]" style={textName}>
      <h1>Subscribe to get the latest<br />news about us</h1>
    </div>
    <div className="flex items-center justify-center">
      <p class="text-[#8B8B8B]  md:ml-[2rem] flex items-center justify-center" style={textName1}>
        Please drop your email below to get daily updates about what we do
      </p>
    </div>
   
    <div class="sm:flex mt-[2.7rem] md:ml-[2.5rem]">
      <div class="border-[#000000] ">
        <input class="border-2 border-[#000000] md:w-[34rem] md:p-[.81rem] relative md:left-[-1.7rem]" type="search" placeholder="Enter Your Email Address" />
      </div>
      <div class="absolute  sm:left-[15rem] md:left-[24.4rem] ">
        <button class="border-2 bg-[#F55F1D] md:h-[2.80rem] w-[8rem] rounded-[1rem] relative top-3 sm:top-[-.10rem] md:top-[.30rem]">
          <h1 class="text-white">Subscribe</h1>
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
