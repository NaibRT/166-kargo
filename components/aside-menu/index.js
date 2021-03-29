import Link from 'next/link';
import React from 'react';
import ButtonComponent from '../button/index';
import Card from '../card/card';
import Divider from '../divider/divider';


function AsideMenu(props) {
    return (
        <div>
        <Card className='p-md bg-white lg br-lg'>
        <Card.Header text={`${props.entry.user.user.firstname} ${props.entry.user.user.lastname}`} style={{fontSize:'20px'}}/>
        <p>Müştəri kodu: {props.entry.user.user.customer_number}</p>
        <small>Balansım</small>
        <small>0.00 AZN</small>
          <Card.Body className='mt-xs' style={{padding:0}}>
           <Link href="/new-order">
            <a>
           <ButtonComponent className='w-100' label='Sifariş et' startElement={<img className='mr-xs' src="/assets/icons/el.svg"/>} style={{marginBottom:'10px'}} />
            </a>
           </Link>
           <Link href="/balance">
           <a>
          <ButtonComponent className='w-100' label='Balansı artır' startElement={<img className='mr-xs' src="/assets/icons/el2.svg"/>}/>
           </a>
          </Link>
          <Link href="/decleration">
           <a>
          <ButtonComponent className='w-100 mt-xs' label='Öncədən bəyan et' startElement={<img className='mr-xs' src=""/>}/>
           </a>
          </Link>
          </Card.Body>
      </Card>


      <Card className='p-md bg-white br-lg'  style={{margin: '40px 0 40px 0'}}>
    
        <Card.Body className='sm' style={{padding:0}}>
        <ul className='aside-list-container' style={{listStyleType:'none'}}>
            <li >
                <Link    href="/myaddresses">
                    <a className={splitLocation[1] === "myaddresses" ? " d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/book.svg'}/><span>Xaricdəki ünvanlarım</span> 
                    </a>
                 </Link>
            </li>
            <Divider />
            <li  >
                <Link   href="/orders">
                <a className={splitLocation[1] === "orders" ? " d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/shopping-bag.svg'}/><span>Sifarişlərim</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li  >
                <Link  href="/packages">
                <a className={splitLocation[1] === "packages" ? "d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/package.svg'}/><span>Bağlamalarım</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link   href="/user-info">
                <a  className={splitLocation[1] === "user-info" ? "d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/personal-data.svg'}/><span>Şəxsi məlumatlar</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link  href="/balance">
                <a   className={splitLocation[1] === "balance" ? "d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/cashback.svg'}/><span>Balansımız</span>
                    </a>
                </Link>
            </li>
            <Divider />
             <li>
                <Link    href="/lends">
                <a className={splitLocation[1] === "lends" ? "d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/loan.svg'}/><span>Borclarım</span>
                    </a>
                </Link>
             </li>
             <Divider />
             <li >
                <Link    href="/courier-order">
                <a className={splitLocation[1] === "courier-order" ? "d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/delivery-man.svg'}/><span>Kuryer sifarişi</span>
                    </a>
                </Link>
             </li>

        </ul>
        
        </Card.Body>
    </Card>
     
        </div>
    )
}

const mapStateToProps = state => ({
    entry: state.entry
})
export default connect(mapStateToProps)(memo(AsideMenu))
