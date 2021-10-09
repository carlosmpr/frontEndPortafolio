import React from 'react'

export default function Input({text, placeholder}) {
    return (
        <div className="w-full flex flex-col space-y-2">
        <label className="text-primary">{text}</label>
        <input className=" p-3 outline-none bg-secondary text-primary rounded-md " placeholder={placeholder}/>
    </div>
    )
}
