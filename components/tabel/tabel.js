import React from 'react'



function Tabel({th = [], data = [], renderBody = () => {}, thClassName,}) {
    console.log(data)
    return (
        <table className='tabel'>
        <thead className={`tabel-head ${thClassName || ''}`}>
        <tr className=''>
             {
                 th.map(h => (
                  <th>{h}</th>  
                 ))
             }

        </tr>
        </thead>
        <tbody className='tabel-body'>
            {
                 data.map((d,dIndex) => {
                    return <tr key={dIndex}>
                       {
                          Object.values(d).map(renderBody)
                       }
                    </tr>
                })
            }
        </tbody>
    </table>
    )
}

export default Tabel
