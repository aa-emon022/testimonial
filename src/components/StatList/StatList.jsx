'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Followers from '@/assets/workList/friend.svg'
import Like from '@/assets/workList/like.svg'
import Happy from '@/assets/workList/happt.svg'
import Project from '@/assets/workList/project.svg'
export default function StatList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://agency.teamrabbil.com/api/StatList"
        );
        const dataJson = await data.json();
        setData(dataJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <>
        <div className='flex w-full gap-5 justify-center items-center h-[20rem]'>
            
               
                  <div className='w-[10rem]  flex flex-col justify-center items-center shadow-2xl py-[2rem]'>
                    <span className=" w-[4rem] h-[3rem]  bg-[#D7F5DC]  "><Image className='w-[2rem] h-[2rem] ml-[1rem] mt-[.4rem]' src={Followers} width={20} height={10} /></span>
                    {
                        <div>
                           <h1>{data.followers}</h1>
                           <h1>followers</h1>
                        </div>
                    }
                  </div>
                  <div className='w-[10rem]  flex flex-col justify-center items-center shadow-2xl py-[2rem]'>
                  <span className=" w-[4rem] h-[3rem]  bg-[#D7F5DC]  "><Image className='w-[2rem] h-[rem] ml-[1rem] mt-[.4rem]' src={Like} width={20} height={10} /></span>
                    {
                        <div>
                        <h1>{data.solved}</h1> 
                        <h1>solved</h1>
                        </div>
                    }
                  </div >
                  <div className='w-[10rem]   flex flex-col justify-center items-center shadow-2xl py-[2rem]'>
                  <span className=" w-[4rem] h-[3rem]  bg-[#D7F5DC]  "><Image className='w-[2rem] h-[2rem]  ml-[1rem] mt-[.4rem]' src={Happy} width={20} height={5} /></span>
                    {
                        <div>
                        <h1>{data.customers}</h1>
                        <h1>customers</h1>
                        </div>
                    }
                  </div>
                  <div className='w-[10rem]  flex flex-col justify-center items-center shadow-2xl py-[2rem]'>
                  <span className=" w-[4rem] h-[3rem]  bg-[#D7F5DC]  "><Image className='w-[2rem] h-[2rem] ml-[1rem] mt-[.4rem]' src={Project} width={20} height={10} /></span>
                    {
                        <div>
                        <h1>{data.projects}</h1>
                        <h1>projects</h1>
                        </div>
                    }
                  </div>


                
            
           
        </div>
    </>
  )
}
