"use client"
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'> 
      <motion.img 
       initial={{
        y: -100,
        opacity: 0,
       }}
       transition={{ duration: 1.2}}
       whileInView={{ opacity: 1, y:0}}
       viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
         src='https://lh3.googleusercontent.com/a/AAcHTtfQdZfUCJAtoG27hm0csx82FvREMFeau_vsYqPbXcLxDQ=s360-c-no' 
         alt=''
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>ECO SYSTEM</h4>
            <p className='font-bold text-2xl mt-1'>SYSTEM</p>
            <div className='flex space-x-2 my-2'>
              <img className='h-10 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xCuF-Pmw5w9b-thRCh4WA7_e2Tt_k7nZ5Vh30r3o_A&s'
              alt=""
            />
              <img className='h-10 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xCuF-Pmw5w9b-thRCh4WA7_e2Tt_k7nZ5Vh30r3o_A&s'
              alt=""
            />
              <img className='h-10 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xCuF-Pmw5w9b-thRCh4WA7_e2Tt_k7nZ5Vh30r3o_A&s'
              alt=""
            />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary point Summary pointSummary point Summary pointSummary pointSummary pointSummary pointSummary point</li>
                <li>Summary point Summary point Summary pointSummary point Summary pointSummary pointSummary pointSummary pointSummary point</li>
                 
                
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard