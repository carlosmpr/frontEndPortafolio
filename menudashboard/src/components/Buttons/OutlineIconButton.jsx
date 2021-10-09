import React from 'react'

export default function OutlineIconButton({text, icon}) {
    return (
        <div className="p-4 flex  items-center justify-center text-sm text-primary border border-primary rounded-md gap-x-2 cursor-pointer hover:bg-theme"> 
        <i className={`text-lg ${icon}`}></i>
       <p> {text}</p>
        </div>
            
  
    )
}
