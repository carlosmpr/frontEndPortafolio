import React from 'react'

export default function NavigationItem({text, active}) {
    return (
        <p className={`${active ? "text-secondary border-b border-secondary" :"text-primary"} cursor-pointer`}>Hot dishes</p>
    )
}
