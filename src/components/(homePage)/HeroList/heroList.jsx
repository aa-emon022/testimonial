async function getData() {
  let HeroListsBase = await fetch(process.env.BrandList + "api/BrandList");
  if (!HeroListsBase.ok) {
    throw new error("Hero list calling fail");
  }
  return HeroListsBase.json();
}

import React from "react";
import MenuContent from "../menuContent/menuContent";
import Image from "next/image";
import HeroList2 from "@/api/HeroListData/HeroListData";
const headerStyle = {
  fontFamily: "Poppins, sans-serif", // Use "sans-serif" as a fallback font
  fontWeight: 900, // Use the font family name
};
async function heroList() {
  const HeroList = await getData();
  const HeroListData = await HeroList2();

  return (
    <>
      <div className="h-[837px] bg-[#D7F5DC] ">
        <div>
          <MenuContent />
        </div>
        <div className=" grid grid-cols-2 gap-1">
          <div className="xl:w-[25rem] ml-[4rem] ">
            <div>
              <h1 style={headerStyle} className="sm:text-[2rem] md:text-[3rem]">
                Increase Your Customers Loyalty and Satisfaction
              </h1>
            </div>
            <div className="mt-[1rem]">
              <p>
                We help businesses like yours earn more customers, standout from
                competitors, make more money
              </p>
            </div>
            <div>
              <button className="position relative top-[2rem] md:top-[6rem] left-[1rem] border-2 bg-[#20B15A] h-[3rem] w-[8rem] rounded-[3rem] text-white">
                <p className="">Get Started</p>
              </button>
            </div>
          </div>

          {/* -------------- */}
          <div className="flex  gap-4 ">
            <div className=" flex flex-col gap-4 ">
              <Image
                className="rounded-[10%]"
                src={HeroListData.image3}
                width={200}
                height={100}
              />
              <Image
                className="rounded-[10%]"
                src={HeroListData.image1}
                width={200}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <Image
                className="rounded-[10%]"
                src={HeroListData.image4}
                width={200}
                height={100}
              />
              <Image
                className="rounded-[10%]"
                src={HeroListData.image2}
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:gap-[3rem] lg:gap-[7rem] md:gap-[4rem]  xl:gap-[9rem] position absolute sm:top-[47rem] md:top-[47rem] top-[45rem] w-full bg-white">
          {HeroList.map((item, index) => (
            <div key={index}>
              {" "}
              <div className="flex sm:ml-[1.1rem] md:pl-[1.4rem] pt-[1rem] xl:pl-[4.5rem]  lg:pl-[3.5rem] sm:mr-[1.5rem] mr-[2rem]">
                <Image src={item.image} width={100} height={100} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default heroList;
