import React from 'react'
import Button from '../reusables/Button'
export default function CardImgBackground({backImg, image, name, username, time,desc}) {
    return (
        <div className="relative w-5/12 h-64 bg-red-400 rounded-3xl p-4 flex flex-col justify-between">
        <div className="absolute left-0 rounded-3xl top-0 w-full h-full bg-indigo-400 overflow-hidden">
          <img src={backImg} alt={backImg} />
        </div>
        <div className="w-full flex gap-x-3 z-10">
          <div className="w-12 h-12  border-dashed border-4 rounded-full  border-red-400">
            <img src={image} alt={image} className="w-full" />
          </div>
          <div className="text-primary">
            <p>{name}</p>
            <p>{username}</p>
          </div>
          <Button text={time} />
        </div>
        <div className=" bg-white rounded-2xl w-full  p-4 text-sm  z-10 backdrop-filter backdrop-blur-md bg-opacity-10">
          <p className="text-white">{desc}</p>
        </div>
      </div>
    )
}
