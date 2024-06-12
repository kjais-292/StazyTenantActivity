"use client"
import {AiOutlineMenu} from 'react-icons/ai';
import Avatar from '@/components/Avatar';
import { IoHelpCircle } from "react-icons/io5";
import { Poppins } from "next/font/google";
import Container from "@/components/Container"
import { useEffect, useRef } from 'react';
const inter = Poppins({ weight: ['600'],subsets: ["latin"] });

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (navbarRef.current) {
      navbarRef.current.classList.remove('hidden');
      navbarRef.current.classList.add('animate-slideDown');
    }
  }, [])
  const currentUser={
    image:null
  };
  return (
    <header ref={navbarRef} className="hidden fixed w-full z-10 shadow-sm bg-white border-slate-200 border">
        <Container>
            <div className="flex flex-row items-center justify-between px-0 py-4 ">
            <a href="#" className={inter.className}>
              <h1 className=" text-4xl text-black">Stazy<span className="text-purple-600">.</span></h1>
            </a>
            {/* <div className="flex flex-row items-center space-x-12">
            <Image height="22"width="22" src="/home.png" className="cursor-pointer" alt="Avatar"/>
            <div className="flex flex-row items-center space-x-2">
              <Image height="22"width="22" src="/search.png" className="cursor-pointer" alt="Avatar"/>
              <div className="text-xl">Explore</div>
            </div>
            <Image height="22"width="22" src="/heart-regular.svg" className=" cursor-pointer" alt="Avatar"/>
            <Image height="22"width="22" src="/messenger.png" className=" cursor-pointer" alt="Avatar"/>
            </div> */}
            <div className="flex flex-row items-center space-x-6">
            <IoHelpCircle className="text-gray-300" size={40}/>
            <div
               className="
               p-4
               md:py-1
               md:px-2
               border-[1px]
               border-neutral-200
               flex
               fkex-row
               items-center
               gap-3
               rounded-full
               cursor-pointer
               hover:shadow-md
               transition
               " 
            >
                <AiOutlineMenu />
                <div className="hidden md:block">
                  <Avatar src="/Placeholder.jpeg"/>
                </div>
            </div>
            </div>
            </div>
        </Container>
    </header>
  )
}

export default Navbar
