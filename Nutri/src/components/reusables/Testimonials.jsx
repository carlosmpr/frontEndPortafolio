import React from 'react'

export default function Testimonials({image, text}) {
    return (
        <div className="w-56 h-full shadow-md  rounded-lg flex flex-col items-center justify-center p-2">
        <img src={image} alt={image} className="w-full"/>
          <p className="text-xs">{text}</p>
        </div>
    )
}
