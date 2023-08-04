"use client"
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '../typtings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo
}

  export  function Hero({pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
         `Hi, The Name's ${pageInfo?.name}` ,"Developer", "Designer", "student"
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
    
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
         src='https://lh3.googleusercontent.com/a/AAcHTtfQdZfUCJAtoG27hm0csx82FvREMFeau_vsYqPbXcLxDQ=s360-c-no' 

        //  src= {urlFor(pageInfo?.heroImage).url()}
         alt=""
         />
         <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Student</h2>
           <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
              <Cursor cursorColor='#14e9fd'/>
            </h1>

            <div className='pt-5'>
               
               <Link href='#about'>
              <button className="heroButton">About</button>
              </Link>
              <Link href="#experience">
              <button className="heroButton">Experience</button>
              </Link>
              <Link href="#skills">
              <button className="heroButton">Skills</button>
              </Link>
              <Link href="#projects">
              <button className="heroButton">Projects</button>
              </Link>
             
            </div>  
        </div>
    </div>
  )
}

export default Hero