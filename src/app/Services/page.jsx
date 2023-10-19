"use client";
import React, { useEffect, useState } from "react";
import MenuContent from "@/components/(homePage)/menuContent/menuContent";
import Footer from "@/components/(homePage)/Footer/footer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Subscribe from "@/components/(homePage)/Subscribe/Subscribe";
export default function Page() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const [AllService, setAllService] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://agency.teamrabbil.com/api/AllService"
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

          <div className="mt-[3rem] ml-[4rem]">
            <h1 className="text-[4rem]">Our Services</h1>
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
        <div>
          <div className="pl-[2rem] pt-[3rem] ">
            <h1 className="text-[1.8rem] font-bold text-[#20B15A]">
              OUR ALL SERVICES
            </h1>
            <h1 className="text-[1.8rem] font-bold">
              We Provide BestWeb design <br />
              services
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mt-[2rem]">
            {AllService.map((items, index1) => (
              <div key={index1}>
                <div className=" shadow-2xl h-[53.3rem] mb-[4rem] rounded-[2rem]">
                  <div className="pl-[2rem] pr-[2rem]">
                    <div className="mb-[2rem] mt-[2.3rem]">
                      <h1 className="text-[1.7rem] font-bold pt-[2.0rem]">
                        {items.title}
                      </h1>
                      <p className="text-[#9D9D9D] text-[1.1rem]">
                        {items.des}
                      </p>
                    </div>
                    <div className=" flex mb-[2.4rem] gap-5">
                      <div >
                        <Image
                          className="h-[16.25rem]"
                          src={items.image1}
                          width={330}
                          height={500}
                        />
                      </div>
                      <div>
                        <Image
                          className="h-[16.25rem]"
                          src={items.image2}
                          width={220}
                          height={500}
                        />
                      </div>
                    </div>
                    <div className=" flex gap-8  ">
                      <div>
                        <Image
                          className="h-[17rem]"
                          src={items.image3}
                          width={500}
                          height={500}
                        />
                      </div>
                      <div>
                        <Image
                          className="h-[17rem]"
                          src={items.image4}
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
}
