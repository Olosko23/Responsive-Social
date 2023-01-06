import React from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import hero from '../assets/hero.jpg';

const Feed = () => {
    const posts = [
        {
            id:0,
            title: "Olosko Collins",
            date: "23 December 2023",
            src:{hero}
        },
        {
            id:1,
            title: "Olosko Collins",
            date: "23 December 2023",
            src:{hero}
        },
        {
            id:2,
            title: "Olosko Collins",
            date: "23 December 2023",
            src:{hero}
        },
        {
            id:3,
            title: "Olosko Collins",
            date: "23 December 2023",
            src:{hero}
        },
        {
            id:4,
            title: "Olosko Collins",
            date: "23 December 2023",
            src:{hero}
        },
    ]
  return (
    <div className="grid place-items-center">
        {
            posts.map(({id,title,date,src}) => (
                <div className="w-full h-fit rounded-lg border-4 flex flex-col justify-center gap-4">
                <div className="flex flex-col px-3 bg-slate-400">
                    <h3 className="font-medium">{title}</h3>
                    <p className="font-light">{date}</p>
                </div>
                    <img className=""src={hero} alt="posted"/>
                <div className="px-3 py-3 flex flex-row gap-8">
                    <AiOutlineLike  className="cursor-pointer hover:scale-105"size={25}/> <span>433</span>
                    <AiOutlineDislike  className="cursor-pointer hover:scale-105"size={25} /> <span>21</span>
                    <BsShare  className="cursor-pointer hover:scale-105"size={25} /> <span>87</span>
                </div>
            </div>
            ))
        }
     
    </div>
  )
}

export default Feed