import React from 'react'

export default function OutlineButton({text}) {
    return (
        <div className="p-1 text-sm text-secondary border border-primary rounded-md"> {text}</div>
    )
}
