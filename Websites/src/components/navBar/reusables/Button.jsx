import React from 'react'

export default function Button({text}) {
    return (
        <p className="p-1 text-sm cursor-pointer text-white bg-primary  rounded-md" > {text}</p>
    )
}
