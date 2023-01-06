import React, { useState } from 'react'
import {AiFillMail} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {FaTimes, FaBars} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <div className="flex flex-row justify-between px-6 py-4 mt-2">
        <div className="font-semibold text-lg cursor-pointer">
        Olosko Messanger
        </div>
        <div className="hidden md:flex">
            <div className="">
                <input className="rounded-lg px-4 py-2 h-8 w-96"type="text" placeholder='Search..' />
            </div>
        </div>
        <div className="hidden md:flex flex-row justify-between gap-5">
        <div className="cursor-pointer">
            <AiFillMail size={25}/>
        </div>
        <div className="cursor-pointer">
            <BsPerson size={25}/>
        </div>
        <div className="font-semibold cursor-pointer text-base">
            Login
        </div>
        </div>
        <div className="flex md:hidden" onClick={() => setNav(!nav)}>
            { nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
    </div>
  )
}

export default Navbar