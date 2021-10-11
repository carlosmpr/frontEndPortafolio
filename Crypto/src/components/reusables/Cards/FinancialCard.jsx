import React from 'react'
import MultiAxisLine from '../../Chart'
export default function FinancialCard() {
    return (
        
        <div className="w-64 h-32 p-4 shadow-md border border-primary rounded-lg shadow-md">
            <div className="flex w-full text-xs text-primary font-thin gap-x-2">
                <p>BTC</p>
                <i class="fas fa-arrows-alt-h"></i>
                <p>USD</p>

                <i class="fas fa-arrow-circle-up"></i>
                <p>6.2%</p>
            </div>
            <p className="text-primary">844.55</p>
            <MultiAxisLine height={100}/>
        </div>

    )
}
