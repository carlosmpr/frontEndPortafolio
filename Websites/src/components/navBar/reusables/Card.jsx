import React from 'react'
import OutlineButton from './OutlineButton'
export default function Card({image, title,desc}) {
    return (
        <div className="w-56 h-full shadow-md rounded-lg bg-indigo-200 flex flex-col items-center justify-center p-2">
       <img src={image} alt={image} className="w-44"/>
        <p className="text-sm text-primary">{title}</p>
        <p className="text-xs text-center">{desc}</p>
        <OutlineButton text="Learn more"/>
      </div>
    )
}
