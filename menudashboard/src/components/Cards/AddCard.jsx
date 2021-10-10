import React from 'react'

export default function AddCard() {
    return (
        <div className="w-56 h-72  rounded-md border-dashed border flex flex-col items-center justify-center text-primary cursor-pointer">
        <i className="fas fa-plus"></i>
        <p>Add new dish</p>
        </div>
    )
}
