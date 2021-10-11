import React from 'react'

export default function TextCenter({title, desc}) {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl text-primary">{title}</h1>
            <div className="w-4/5 text-center">
            <p>{desc}</p>
            </div>
        </div>
    )
}
