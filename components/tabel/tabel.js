import React from 'react'



function Tabel({th = [], data = [], renderBody = () => {}, thClassName,trStyle,className}) {
    return (
        <table className={`tabel ${className || ''}`}>
        <thead className={`tabel-head ${thClassName || ''}`}>
        <tr className=''>
             {
                 th.map((h,i) => (
                  <th key={i}>{h}</th>  
                 ))
             }

        </tr>
        </thead>
        <tbody className='tabel-body'>
            {
                 data.map((d,dIndex) => {
                    return <tr key={dIndex} style={trStyle}>
                       {
                          d && Object.values(d).map(renderBody)
                       }
                    </tr>
                })
            }
        </tbody>
    </table>
    )
}

export default Tabel
