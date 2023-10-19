"use client";
import React, { useEffect, useState } from "react";
import MenuContent from "@/components/(homePage)/menuContent/menuContent";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Subscribe from "@/components/(homePage)/Subscribe/Subscribe";
import Footer from "@/components/(homePage)/Footer/footer";
export default function Page() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const [AllService, setAllService] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://agency.teamrabbil.com/api/AllProject"
        );
        const dataJson = await data.json();
        setAllService(dataJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(AllService);

  return (
    <>
      <section>
  <div className="h-[23.1rem] bg-[#F8F9FC]">
    <MenuContent />

    <div className="mt-[3rem] md:ml-[4rem]">
      <h1 className="text-[4rem] md:text-[5rem]">All Project</h1>
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
</section>
<section>
  <div className="p-[3rem] md:p-[4rem]">
    <h1 className="text-[#20B15A] md:text-[2.5rem] pb-[2rem]">All PROJECT</h1>
    <h1 className="font-bold text-[1.5rem] md:text-[2rem]">
      Better Agency/SEO Solution At <br /> Your Fingertips
    </h1>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-[2rem] sm:p-[3rem] md:ml-[3rem] md:mr-[3rem]">
    {AllService.map((items, index) => (
      <div
        key={index}
        className="h-[24rem] lg:h-[28rem] p-[2rem] shadow-md mb-[3rem] md:mb-0"
      >
        <Image src={items.image} width={500} height={500} />
        <p className="pt-[2rem] lg:text-[1.4rem] font-bold overflow-clip">
          {" "}
          {items.title}
        </p>
      </div>
    ))}
  </div>
</section>

      <Subscribe />
      <Footer />
    </>
  );
}
