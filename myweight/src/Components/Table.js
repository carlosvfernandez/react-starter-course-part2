import React from 'react'
import moment from 'moment'

export default ({ records }) => {

    const renderRow = record => {
        return (
            <tr key={record[0]} >
                <td>{moment(record[0]).format('LLLL')}</td>
                <td>{record[1].toFixed(1)}</td>
            </tr>)
    }

    return (
        <table className="z-deph-2 hoverable">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Weight (Kgs)</th>
                </tr>
            </thead>
            <tbody>
                {
                    records.map(record => renderRow(record))
                }
            </tbody>
        </table>
    )
}