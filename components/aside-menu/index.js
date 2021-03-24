import Link from 'next/link';
import React from 'react';
import ButtonComponent from '../button/index';
import Card from '../card/card';
import Divider from '../divider/divider';


export default function AsideMenu() {
    return (
        <div>
        <Card className='p-md bg-white lg br-lg'>
        <Card.Header text="Nihad Abdullayev" style={{fontSize:'20px'}}/>
        <p>Müştəri kodu: #540728</p>
        <small>Balansım</small>
        <small>0.00 AZN</small>
          <Card.Body className='mt-xs' style={{padding:0}}>
           <Link href="">
            <a>
           <ButtonComponent className='w-100' label='Sifariş et' startElement={<img className='mr-xs' src="/assets/icons/el.svg"/>} style={{marginBottom:'10px'}} />
            </a>
           </Link>
           <Link href="">
           <a>
          <ButtonComponent className='w-100' label='Balansı artır' startElement={<img className='mr-xs' src="/assets/icons/el2.svg"/>}/>
           </a>
          </Link>
          </Card.Body>
      </Card>


      <Card className='p-md bg-white br-lg'  style={{margin: '40px 0 40px 0'}}>
    
        <Card.Body className='sm' style={{padding:0}}>
        <ul className='aside-list-container' style={{listStyleType:'none'}}>
            <li>
                <Link href="/test">
                    <a className="d-flex">
                    <img src={'/assets/icons/book.svg'}/><span>Xaricdəki ünvanlarım</span> 
                    </a>
                 </Link>
            </li>
            <Divider />
            <li>
                <Link href="/orders">
                <a className="d-flex">
                    <img src={'/assets/icons/shopping-bag.svg'}/><span>Sifarişlərim</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link href="/packages">
                <a className="d-flex">
                    <img src={'/assets/icons/package.svg'}/><span>Bağlamalarım</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link href="/user-info">
                <a className="d-flex">
                    <img src={'/assets/icons/personal-data.svg'}/><span>Şəxsi məlumatlar</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link href="/balance">
                <a className="d-flex">
                    <img src={'/assets/icons/cashback.svg'}/><span>Balansımız</span>
                    </a>
                </Link>
            </li>
            <Divider />
             <li>
                <Link href="/lends">
                <a className="d-flex">
                    <img src={'/assets/icons/loan.svg'}/><span>Borclarım</span>
                    </a>
                </Link>
             </li>
             <Divider />
             <li>
                <Link href="">
                <a className="d-flex">
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
