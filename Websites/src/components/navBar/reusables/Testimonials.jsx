import React from 'react'

export default function Testimonials({image, text}) {
    return (
        <div className="w-56 h-full  rounded-lg flex flex-col items-center justify-center p-2">
        <img src={image} alt={image} className="w-24"/>
          <p className="text-xs">{text}</p>
        </div>
    )
}
