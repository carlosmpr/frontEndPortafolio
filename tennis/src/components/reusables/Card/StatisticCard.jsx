import React from 'react'

export default function StatisticCard({number, color , name}) {
    return (
        <div className={`relative w-4/12 h-20 rounded-xl text-white bg-${color}-400 shadow-sm  p-4 overflow-hidden`}>
        <p>{name}</p>
        <div className="flex items-center gap-x-3 text-sm font-thin">
          <p>{number}</p>
          <i class="fas fa-arrow-up"></i>
          <div className="absolute w-2/5 h-3/4 -right-5 opacity-20 bg-white rounded-full"></div>
          <div className="absolute w-2/5 h-3/4 -right-2 top-0 opacity-20 bg-white rounded-full"></div>
          <div className="absolute w-2/5 h-3/4 right-2 botton-0 opacity-20 bg-white rounded-full"></div>
        </div>
      </div>
    )
}
