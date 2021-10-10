import React from 'react'
import OutlineIconButton from '../Buttons/OutlineIconButton'

export default function TableReport() {
    return (
        <div className="w-full h-full bg-primary rounded-lg p-4 overflow-y-scroll">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-xl text-primary"> Order Report</h3>
            <OutlineIconButton text="filter" icon="fas fa-sort" />
          </div>

          <table className="table-fixed ">
            <tr className="border-b">
              <th>Customer</th>
              <th>Menu</th>

              <th>Total Payment</th>
              <th>Status</th>
            </tr>
            <tr>
              <td className="font-bold">Alfreds Futterkiste</td>
              <td className="font-thin">Italian Pasta</td>

              <td className="font-thin">$125</td>
              <td>
                <div className="bg-green-400 p-2 rounded-full">Completed</div>
              </td>
            </tr>

            <tr>
              <td className="font-bold">Alfreds Futterkiste</td>
              <td className="font-thin">Italian Pasta</td>

              <td className="font-thin">$125</td>
              <td>
                <div className="bg-green-400 p-2 rounded-full">Completed</div>
              </td>
            </tr>

            <tr>
              <td className="font-bold">Alfreds Futterkiste</td>
              <td className="font-thin">Italian Pasta</td>

              <td className="font-thin">$125</td>
              <td>
                <div className="bg-green-400 p-2 rounded-full">Completed</div>
              </td>
            </tr>

            <tr>
              <td className="font-bold">Alfreds Futterkiste</td>
              <td className="font-thin">Italian Pasta</td>

              <td className="font-thin">$125</td>
              <td>
                <div className="bg-green-400 p-2 rounded-full">Completed</div>
              </td>
            </tr>

            <tr>
              <td className="font-bold">Alfreds Futterkiste</td>
              <td className="font-thin">Italian Pasta</td>

              <td className="font-thin">$125</td>
              <td>
                <div className="bg-green-400 p-2 rounded-full">Completed</div>
              </td>
            </tr>

            <tr>
              <td className="font-bold">Alfreds Futterkiste</td>
              <td className="font-thin">Italian Pasta</td>

              <td className="font-thin">$125</td>
              <td>
                <div className="bg-green-400 p-2 rounded-full">Completed</div>
              </td>
            </tr>
          </table>
        </div>
    )
}
