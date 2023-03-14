import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'

import {images} from '../assets'

const {aryaman , harsh, subhanshu, bisal} = images

const About = () => {
  return (
    <div className='flex flex-col justify-between mt-8 mx-20'>
      <div className='text-xl text-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ut deleniti, obcaecati ducimus error minus culpa ipsam, ea nam sunt quasi cumque mollitia distinctio facere reprehenderit. Laborum cumque adipisci vero.
      </div>
      
      <div className='flex flex-wrap justify-evenly h-150 w-[100%] mt-8'>

        <div className='flex flex-col items-center w-1/5 shadow-lg shadow-black translate-y-0 rounded my-4'>
          <div className='h-max rounded'>
            <img src={harsh} alt="" className='rounded-full m-4' width={200}/>
          </div>
          <div className='text-text font-bold text-2xl'>Harsh Pandey</div>
          <div className='flex justify-evenly items-center w-[100%] my-6'>
            <a href="https://github.com/harshp77" target="_blank"><BsGithub size={30} color="black"/></a>
            <a href="https://www.linkedin.com/in/harsh-pandey-27013a202/" target="_blank"><BsLinkedin size={30} color="0A66C2"/></a>
            <a href="mailto: harsh20101@iiitnr.edu.in"><MdOutlineAlternateEmail size={30} color="EA4335"/></a>
          </div>
        </div>
        
        <div className='flex flex-col items-center w-1/5 shadow-lg shadow-black translate-y-0 rounded my-4'>
          <div className='h-max rounded'>
            <img src={subhanshu} alt="" className='rounded-full m-4' width={200}/>
          </div>
          <div className='text-text font-bold text-2xl'>Subhanshu Arya</div>
          <div className='flex justify-evenly items-center w-[100%] my-6'>
            <a href="https://github.com/Subhanshu20101" target="_blank"><BsGithub size={30} color="black"/></a>
            <a href="https://www.linkedin.com/in/subhanshu-arya-3a7017186/" target="_blank"><BsLinkedin size={30} color="0A66C2"/></a>
            <a href="mailto: subhanshu20101@iiitnr.edu.in"><MdOutlineAlternateEmail size={30} color="EA4335"/></a>
          </div>
        </div>

        
        <div className='flex flex-col items-center w-1/5 shadow-lg shadow-black translate-y-0 rounded my-4'>
          <div className='h-max rounded'>
            <img src={bisal} alt="" className='rounded-full m-4' width={200}/>
          </div>
          <div className='text-text font-bold text-2xl'>Vishal Nitnaware</div>
          <div className='flex justify-evenly items-center w-[100%] my-6'>
            <a href="https://github.com/vishal7474" target="_blank"><BsGithub size={30} color="black"/></a>
            <a href="https://www.linkedin.com/in/vishal-nitnaware-71b497225/" target="_blank"><BsLinkedin size={30} color="0A66C2"/></a>
            <a href="mailto: vishal20102@iiitnr.edu.in"><MdOutlineAlternateEmail size={30} color="EA4335"/></a>
          </div>
        </div>

        
        <div className='flex flex-col items-center w-1/5 shadow-lg shadow-black translate-y-0 rounded my-4'>
          <div className='h-max rounded'>
            <img src={aryaman} alt="" className='rounded-full m-4' width={200}/>
          </div>
          <div className='text-text font-bold text-2xl'>Aryaman</div>
          <div className='flex justify-evenly items-center w-[100%] my-6'>
            <a href="https://github.com/Aryaman-Arya" target="_blank"><BsGithub size={30} color="black"/></a>
            <a href="https://www.linkedin.com/in/aryaman-9282141b8/" target="_blank"><BsLinkedin size={30} color="0A66C2"/></a>
            <a href="mailto: aryaman20102@iiitnr.edu.in"><MdOutlineAlternateEmail size={30} color="EA4335"/></a>
          </div>
        </div>



        
      </div>
    </div>
  )
}

export default About