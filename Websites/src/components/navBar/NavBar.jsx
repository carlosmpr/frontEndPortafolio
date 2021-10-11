import React from 'react'
import Button from './reusables/Button'
export default function NavBar() {
    return (
        <div className=" flex w-full h-14 p-4 text-primary">
            <div className="flex flex-1 items-center gap-x-1 ">
            <i class="fas fa-arrow-up text-secondary"></i>
            <p>UP BUSINESS</p>
            </div>

            <div className="flex gap-x-6">
                <p>Home</p>
                <p>How we work</p>
                <p>Our Team</p>
                <p>Pricing</p>
                <Button text={"Book a Call"}></Button>
            </div>
        </div>
    )
}
