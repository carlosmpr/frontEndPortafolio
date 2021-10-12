import React from 'react'

export default function Button({text, style="text-white bg-gradient-to-b from-pink-400 to-purple-500"}) {
    return (
        <p className={`p-2 pl-6 pr-6 text-sm cursor-pointer ${style} rounded-3xl`} > {text}</p>
    )
}
