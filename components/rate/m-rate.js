import React from 'react';
import { useIntl } from 'react-intl';


function MRate({data = [],icon,headerText,style}){
  const { formatMessage: f } = useIntl(); 

  return (
    <table className='m-table' style={style}>
      <thead>
          <tr>
           <th>{f({id:'weight'})}</th>
           <th colSpan="3">
             <div>
                <img src={'/assets/icons/15.svg'} className='img '/>     
                <img src={'/assets/icons/15.svg'} className=' img '/>
                <img src={'/assets/icons/16.svg'} className='img img-2'/>
             </div>
           </th>
         </tr>
      </thead>

  <tbody>
      {
       data.map((x,i) => (
        <tr key={i}>
            <td>{x?.min} - {x?.max}</td>
            <td>{x?.amount} $</td>
            <td>{x?.amount} $</td>
            <td>{x?.amount} $</td>
        </tr>
       ))
      } 

 
  </tbody>

</table>
  )
}

export default MRate
