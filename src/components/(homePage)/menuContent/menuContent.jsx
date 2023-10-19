'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function MenuContent() {
  const [show, setShow] = useState(false); 

  const handle = () => {
    setShow(!show);
  };

  return (
    <>
      <div className='hidden md:flex lg:flex xl:flex 2xl:flex h-[9rem]'>
        <div className='md:w-[13rem] lg:w-[19rem] 2xl:w-[36rem] md:pt-[1.60rem] lg:pt-[1.80rem] '>
          <h1 className='lg:pl-[3rem] md:pl-[2.80rem] 2xl:pl-[12rem]'>Design<span className='text-[#F55F1D]'>AGENCY</span></h1>
        </div>
        <div className='md:flex lg:flex xl:flex 2xl:flex md:flex-wrap lg:flex-wrap xl:flex-wrap 2xl:flex-wrap lg:gap-[2rem] md:gap-[.60rem] xl:gap-[4rem] md:mr-[1rem] lg:mr-[3rem] xl:mr-[3rem] 2xl:mr-[3rem]'>
          <Link href="/"><p className='pt-[2rem]'>Home</p></Link>
          <Link href="/Team"><p className='pt-[2rem]'>Team</p></Link>
          <Link href="/Services"><p className='pt-[2rem]'>Services</p></Link>
          <Link href="/Projects">  <p className='pt-[2rem]'>Projects</p></Link>
          <Link href="/Testimonial"> <p className='pt-[2rem]'>Testimonial</p></Link>
          
          <Link href="/Login"><button className='md:mt-[1.6rem] lg:mt-[1.6rem] xl:mt-[1.6rem] 2xl:mt-[1.6rem] md:w-[4rem] w-[5.8rem] h-[2.75rem] border-2 border-[#20B15A] rounded-[10px]'><h1>Login</h1></button>
          </Link>
          <Link href="/Register"><button className='mt-[1.6rem] md:w-[5rem] w-[6.56rem] h-[2.75rem] bg-[#20B15A] border-[#20B15A] rounded-[10px]'><h1 className='text-white rounded-[.30rem]'>Register</h1></button></Link>
        
         
          
        </div>
      </div>

      <div className='md:hidden flex h-[6rem]  pt-[2rem] justify-between  '>
        <div className='pl-[3rem]'>
          <h1 className=''>Design<span className='text-[#F55F1D]'>AGENCY</span></h1>
        </div>
        <div className='pr-[3rem]'>
          <button onClick={handle} className='absolute top-[2rem] right-[3rem]'>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        {show && (
          <div className='z-2 flex flex-col position relative top-[4rem] sm:pl-[7rem] pl-[3rem] sm:right-[20rem] bg-white shadow-2xl h-[30rem] sm:w-[20rem] w-[30rem]'>
          <Link href="/"><p className='pt-[2rem]'>Home</p></Link>
      
          <Link href="/Team"><p className='pt-[2rem]'>Team</p></Link>
          <Link href="/Services"> <p className='pt-[2rem]'>Services</p></Link>
          <Link href="/Projects"> <p className='pt-[2rem]'>Projects</p></Link>
          <Link href="/Testimonial">  <p className='pt-[2rem]'>Testimonial</p></Link>
          <Link href="Login"><p className='pt-[2rem]'><button className='border-2 border-[#20B15A] rounded-[10px] w-[5rem] h-[3rem]'>Login</button></p></Link>
          <Link href="Register">  <p className='pt-[2rem] '><button className='bg-[#20B15A]  rounded-[10px]  w-[5rem] h-[3rem]'>Register</button></p></Link>



            
            
           
           
          
            
          
            
          </div>
        )}
      </div>
    </>
  );
}

export default MenuContent;
