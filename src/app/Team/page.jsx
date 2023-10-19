"use client";
import React, { useState, useEffect } from "react";
import MenuContent from "@/components/(homePage)/menuContent/menuContent";
import Subscribe from "@/components/(homePage)/Subscribe/Subscribe";
import Footer from "@/components/(homePage)/Footer/footer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SvgIcon1 from "@/assets/fb.svg";
import SvgIcon2 from "@/assets/instagram.svg";
import SvgIcon3 from "@/assets/ins.svg";
import Link from "next/link";

export default function page() {
  const [TeamData, setTeamData] = useState([]);
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  useEffect(() => {
    (async () => {
      const data = await fetch("https://agency.teamrabbil.com/api/TeamList");
      const json = await data.json();
      setTeamData(json);
    })();
  }, []);

  return (
    <>
      <section className="pb-[10rem]">
        <div className="h-[23.1rem] bg-[#F8F9FC]">
          <MenuContent />
          <div className="mt-[8rem] ml-[4rem]">
            <h1>
              Home{" "}
              {pathSegments.map((segment, index) => (
                <span key={segment}>
                  {index === 0 ? " > " : ""}
                  <span className="text-[#20B15A]">{segment}</span>
                </span>
              ))}
            </h1>
          </div>
        </div>

        <div>
          <div className="ml-[6.5rem] mr-[6.5rem]">
            <h1 className="text-[#20B15A] pb-[2rem] pt-[3rem]">
              {" "}
              Our Team Member
            </h1>
            <h1 className="text-[1.7rem] font-bold pb-[2rem]">
              Check our awesome team <br />
              members
            </h1>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 ml-[6.5rem] mr-[6.5rem] ">
              {TeamData.map((items, index) => (
                <div
                  key={index}
                  className="h-[23 rem] sm:h-[25rem] md:h-[22rem] lg:h-[29rem] xl:h-[30rem]  shadow-2xl rounded-tl-lg"
                >
                  <Image src={items.image} width={340} height={500} />
                  <h1 className="flex justify-center items-center pt-[2.70rem]">
                    {items.name}
                  </h1>
                  <div className="bg-white shadow-2xl position relative top-[-10rem]  lg:ml-[3rem] flex gap-[1rem]  rounded-[3rem] lg:w-[10rem] lg:h-[3rem]  justify-center">
                    <Link href={items.facebook}>
                      <Image
                        className="mt-[.7rem]"
                        src={SvgIcon1}
                        alt="My SVG"
                        width={14}
                        height={20}
                      />
                    </Link>
                    <span className="pt-[.7rem] text-[#737588]">|</span>
                    <Link href={items.twitter}>
                      <Image
                        className="mt-[.8rem]"
                        src={SvgIcon2}
                        alt="My SVG"
                        width={16}
                        height={20}
                      />
                    </Link>
                    <span className="pt-[.7rem] text-[#737588]">|</span>
                    <Link href={items.instagram}>
                      <Image
                        className="mt-[.8rem]"
                        src={SvgIcon3}
                        alt="My SVG"
                        width={16}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
}
