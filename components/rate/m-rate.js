import React from 'react';
import { useIntl } from 'react-intl';

const staticData = [
  {min_max: '0.1 - 0.25',priceTR:'',priceUK:'',priceUS:'',},
  {min_max: '0.25 - 0.5',priceTR:'',priceUK:'',priceUS:'',},
  {min_max: '0.5 - 0.7',priceTR:'',priceUK:'',priceUS:'',},
  {min_max: '0.7 - 1',priceTR:'',priceUK:'',priceUS:'',},
  {min_max: '1 - 5',priceTR:'',priceUK:'',priceUS:'',},
  {min_max: '5 - 10',priceTR:'',priceUK:'',priceUS:'',},
  {min_max: '10 - 20',priceTR:'',priceUK:'',priceUS:'',},
  {min_max: '20 - 50',priceTR:'',priceUK:'',priceUS:'',},
]

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
                <img src={'/assets/icons/18.svg'} className=' img '/>
                <img src={'/assets/icons/16.svg'} className='img img-2'/>
             </div> 
           </th>
         </tr>
      </thead>

  <tbody>
      {
       data.map((x,i) => (
        <tr key={i}>
            <td>{x.weight} kq</td>
            {
              x.tariffs.map((t,ti) => {
                return <td key={ti}>{t.price} $</td>
              })
            }
            {/* <td>{x?.amount} $</td>
            <td>{x?.amount} $</td>
            <td>{x?.amount} $</td> */}
        </tr>
       ))
      } 

 
  </tbody>

</table>
  )
}

export default MRate
