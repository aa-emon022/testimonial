import React from "react";
import HeroList from "@/components/(homePage)/HeroList/heroList";
import Subscribe from "@/components/(homePage)/Subscribe/Subscribe";
import WorkList from "@/components/(homePage)/WorkList/worklist";
import FeaturedProject from "@/components/(homePage)/FeaturedProject/FeaturedProject";
import StatList from "@/components/StatList/StatList";
import Footer from "@/components/(homePage)/Footer/footer";
import SiteMeta from "@/api/SiteMeta/siteMeta";

function page() {
  return (
    <>
      
      <HeroList />
      <WorkList />
      <StatList />
      <FeaturedProject />
      <Subscribe />
      <Footer />

     

    </>
  );
}

export default page;

export async function generateMetadata(){
  const data= await SiteMeta()
  return{
    title: data[0].title,
    description:data[0].keywords,
  }

}