import React from 'react';
import Card from '../card/card';
import ButtonComponent from '../button/index'
import Link from 'next/link'
import Divider from '../divider/divider'


export default function AsideMenu() {
    return (
        <div>
        <Card className='p-md bg-white lg'  style={{margin: '40px 0 40px 0'}}>
        <Card.Header text="Nihad Abdullayev" style={{fontSize:'20px'}}/>
        <p>Müştəri kodu: #540728</p>
        <small>Balansım</small>
        <small>0.00 AZN</small>
          <Card.Body className='sm' style={{padding:0}}>
           <Link href="">
            <a>
           <ButtonComponent label='Sifariş et' startElement={<img src="/assets/icons/el.svg"/>} style={{marginBottom:'10px'}} />
            </a>
           </Link>
           <Link href="">
           <a>
          <ButtonComponent  label='Balansı artır' startElement={<img src="/assets/icons/el2.svg"/>}/>
           </a>
          </Link>
          </Card.Body>
      </Card>


      <Card className='p-md bg-white lg'  style={{margin: '40px 0 40px 0'}}>
    
        <Card.Body className='sm' style={{padding:0}}>
        <ul style={{listStyleType:'none'}}>
            <li>
                <Link href="">
                    <a className="d-flex">
                    <img src={'/assets/icons/book.svg'}/><span>Xaricdəki ünvanlarım</span> 
                    </a>
                 </Link>
            </li>
            <Divider />
            <li>
                <Link href="">
                <a className="d-flex">
                    <img src={'/assets/icons/shopping-bag.svg'}/><span>Sifarişlərim</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link href="">
                <a className="d-flex">
                    <img src={'/assets/icons/package.svg'}/><span>Bağlamalarım</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link href="">
                <a className="d-flex">
                    <img src={'/assets/icons/personal-data.svg'}/><span>Şəxsi məlumatlar</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link href="">
                <a className="d-flex">
                    <img src={'/assets/icons/cashback.svg'}/><span>Balansımız</span>
                    </a>
                </Link>
            </li>
            <Divider />
             <li>
                <Link href="">
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
