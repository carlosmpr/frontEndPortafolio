import React from 'react'
import food from '../../assets/images/Content/food.png'
export default function EditCard() {
    return (
        <div className="w-56 h-72 border rounded-md flex flex-col items-center justify-between text-primary">
        <img src={food} alt={food} className="w-32" />
        <p>Italian Pasta</p>
        <div className="w-full flex justify-around text-sm font-thin">
          <p>$2.29</p>
          <p>20 Bowls</p>
        </div>
        <div className="w-full h-12 bg-theme opacity-25 flex items-center justify-center">
          <i className="fas fa-pencil-alt text-primary"></i>
          <p>Edit</p>
        </div>
      </div>
    )
}
