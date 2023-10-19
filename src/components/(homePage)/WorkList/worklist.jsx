import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WorkListData from "@/api/worklist/worklist";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Fb from '@/assets/fb.svg'
import Ins from '@/assets/ins.svg'
import X from '@/assets/instagram.svg'
import Image from "next/image";
export default async function workLists() {
  const WorkList = await WorkListData();
  const icons = [Fb, Ins, X];
  return (
    <>
      <div className="">
        <div className="mt-[2rem] ml-[2rem]">
          <h1 className="text-[30px] text-[#20B15A]">Work List</h1>
          <h1 className="text-[30px] font-bold">We provide the Perfect Solution <br/>to your business growth</h1>
        </div>

        <div className="mt-[2rem] ">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:ml-[3rem] md:mr-[3rem] gap-3 lg:mr-[1rem]">
            {WorkList.map((items, index) => (
              <div key={index} className="  flex flex-col justify-center items-center  hover:shadow-2xl w-full  h-[15rem]">
                <div className="  w-[5rem] h-[4rem] bg-[#D7F5DC] flex justify-center rounded-[1rem] ">
                  {/* <FontAwesomeIcon icon={icons[index]} className="h-[2rem]  "/> */}

                  <Image src={icons[index]} width={20} height={10}/>
                </div>
                <div className="pt-[1rem] ">
                <h1 className=" font-bold sm:pl-[3rem]">{items.title}</h1>
               
                 
                </div>
                <div className="mt-[3rem]">
                <div className="flex gap-2 "><h1>read More</h1><FontAwesomeIcon className='position relative bottom-[-.4rem]' icon={faArrowRight} /></div>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
