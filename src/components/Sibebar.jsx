import React from 'react';
import { AiFillContacts, AiFillMessage, AiFillSetting, AiOutlineGroup } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { FaHome, FaStore } from 'react-icons/fa';

const Sibebar = () => {
  return (
    <div className="py-5 fixed">
        <div>
            <ul className="hidden md:flex flex-col gap-6 w-36 overflow-hidden">
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><FaHome size={25} /> Home</li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><AiFillMessage size={25} /> Messages</li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><AiOutlineGroup size={25} /> Groups</li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><FaStore size={25} /> Marketplace</li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><BsPeople size={25} /> Friends</li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><AiFillContacts size={25} /> Contacts</li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><AiFillSetting size={25} /> Settings</li>
            </ul>
            <ul className="flex flex-col gap-6 md:hidden">
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><FaHome size={25} /></li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><AiFillMessage size={25} /> </li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><AiOutlineGroup size={25} /></li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><FaStore size={25} /> </li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><BsPeople size={25} /></li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><AiFillContacts size={25} /> </li>
            <li className="flex flex-row gap-2 cursor-pointer hover:scale-105 "><AiFillSetting size={25} /> </li>
            </ul>
        </div>
    </div>
  )
}

export default Sibebar