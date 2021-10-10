import React from 'react'

export default function ExpandCard({children}) {
    return (
        <div className="w-full  bg-primary rounded-xl shadow-sm ">
            {children}
        </div>
    )
}
