import React from 'react'

export default function ImageBadge({backImg, image, name, username, time,desc}) {
    return (
        <div className="relative w-20 h-32 bg-red-400 rounded-3xl p-4 flex flex-col justify-center">
        <div className="absolute left-0 rounded-3xl top-0 w-20 h-32 bg-indigo-200 overflow-hidden">
          <img src={"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"} alt={backImg} className="w-full"/>
        </div>
        <div className="w-full flex gap-x-3 z-10">
          <div className="w-12 h-12  border-dashed border-4 rounded-full  border-red-400">
            <img src={image} alt={image} className="w-full" />
            <p className="text-center text-secondary">Live</p>
          </div>
        
      
        </div>
       
      </div>
    )
}
