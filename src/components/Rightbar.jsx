import React from 'react'
import { BsTwitter } from 'react-icons/bs'

const Rightbar = () => {
  return (
    <div className="fixed w-full sm:w-fit">
        <div className="grid grid-cols-1 place-items-center gap-4 ml-12">
            <h2>Latest</h2>
            <div>    
            <p className="flex flex-col gap-2"> <BsTwitter /> Top Trending</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            </div>
            <div>    
            <p className="flex flex-col gap-2"> <BsTwitter /> Top Trending</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            </div>
            <div>    
            <p className="flex flex-col gap-2"> <BsTwitter /> Top Trending</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            <p>#NewsKenya</p>
            </div>
        </div>
    </div>
  )
}

export default Rightbar