import React from "react";
import FeaturedProjectData from "@/api/FeaturedProjectData/FeaturedProjectdata";
import Image from "next/image";

export default async function FeaturedProject() {
  const FProjectData1 = await FeaturedProjectData();
  const ftData = FProjectData1.slice(0, 1);
  const ftData1 = FProjectData1.slice(1, 5);
  console.log(ftData);
   const fontStyle={
    fontFamily: "Poppins, sans-serif", // Use "sans-serif" as a fallback font
    fontWeight: 900,
   }
  return (
    <>
      
    </>
  );
}
