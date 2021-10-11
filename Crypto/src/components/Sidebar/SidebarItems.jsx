import React from 'react'

export default function SidebarItems({children}) {
    return (
        <div className="w-full text-primary text-xl cursor-pointer flex items-center gap-x-4 pt-2 pb-2 flex  justify-center hover:bg-secondary hover:text-secondary rounded-l-xl ">
        {children}
        </div>
    )
}
