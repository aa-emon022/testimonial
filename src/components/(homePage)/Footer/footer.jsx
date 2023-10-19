"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Fb from "@/assets/footerlogo/fb.svg";
import Ins from "@/assets/footerlogo/ins.svg";
import X from "@/assets/footerlogo/x.svg";
import LinkIn from "@/assets/footerlogo/in.svg";
import Link from "next/link";
function footer() {
  const [SocialLink, setSocialLink] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://agency.teamrabbil.com/api/SocialLink"
        );
        const dataJson = await data.json();
        setSocialLink(dataJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    
      <div className="bg-black w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  text-white ml-[3rem] mt-[3rem]">
        <div >
          <div>
            <div >
              <h1 className="text-[2rem] pt-[3rem] pb-[2rem]">WEB LOGO</h1>
              <p>
                Some footer text about the <br /> Agency. Just a little
                description to <br /> help people understand you better
              </p>
            </div>

            <div className="flex  gap-5  text-white pt-[3rem]">
              <Link href="https://www.google.com/ ">
                <Image src={Fb} width={30} height={3} />
              </Link>
              <Link href="https://www.google.com/ ">
                <Image src={X} width={30} height={3} />
              </Link>
              <Link href="https://www.google.com/ ">
                <Image src={LinkIn} width={30} height={3} />
              </Link>
              <Link href="https://www.google.com/ ">
                <Image src={Ins} width={30} height={3} />
              </Link>
            </div>
          </div>
        </div>
        <div >
          <h1 className="pt-[3rem] pb-[2rem]">Quick Link</h1>
          <p className="pb-[.70rem]">Services</p>
          <p className="pb-[.70rem]">Portfolio</p>
          <p className="pb-[.70rem]">About Us </p>
          <p className="pb-[.70rem]">Contact Us</p>
        </div>
        <div >
          <h1 className="pt-[3rem] pb-[2rem]">Address</h1>
          <p>
            Design Agency Head Office.
            <br />
            Airport Road <br />
            United Arab Emirate
          </p>
        </div>
      </div>
      <h1 className="ml-[3rem] text-white pt-[5rem] pb-[9rem]">Copyright Design Agency 2022</h1>
      </div>
    </>
  );
}

export default footer;
