import React from 'react'
import OutlineButton from './OutlineButton'
export default function HeroCenter({title, image}) {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-2">
            <h1 className="text-3xl text-primary">{title}</h1>
            <img src={image} alt={image} className="w-1/2"/>
           <OutlineButton text="Let's talk" />
        </div>
    )
}
