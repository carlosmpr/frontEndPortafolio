import React from 'react'

export default function SearchBar() {
    return (
        <div className="flex items-center shadow-md border text-primary outline-none border-primary bg-transparent rounded-md p-2">
            <i class="fas text-lg fa-search"></i>
        <input className="p-2  text-primary outline-none border-gray-50 bg-transparent rounded-md " placeholder={"Search for food coffe"}/>
        </div>
    )
}
