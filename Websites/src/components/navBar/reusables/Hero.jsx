import React from 'react'

export default function Hero({image, title, desc , children, highlight, intro, reverse}) {
    return (
        <div className={`w-full h-3/5 flex ${reverse} items-center`}>
        <div className="w-5/12 h-full flex flex-col items-center justify-center gap-y-3">
            {highlight ? <h1 className="text-6xl font-bold text-primary"> {intro}<span className="text-secondary">{highlight}</span> {title}</h1> : <h1 className="text-3xl font-bold text-primary"> {title}</h1> }
          
          <p>{desc}</p>
          <div className="flex w-full justify-center gap-x-4">
         {children}
          </div>
        </div>
        <div className="flex-1">
          <img src={image} alt={image} className="w-full"/>
        </div>
       </div>
    )
}
