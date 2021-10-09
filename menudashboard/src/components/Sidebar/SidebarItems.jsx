import React from 'react'

export default function SidebarItems({children}) {
    return (
        <div className="w-full  pt-2 pb-2 flex  justify-center hover:bg-white rounded-l-xl ">
        {children}
        </div>
    )
}
