import Link from 'next/link';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { connect } from "react-redux";
import ButtonComponent from '../button/index';
import Card from '../card/card';
import Divider from '../divider/divider';



function AsideMenu(props) {
    const { formatMessage: f } = useIntl(); 
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <div>
        <Card className='p-md bg-white lg br-lg'>
        <Card.Header text={`${props.entry.user.user.firstname} ${props.entry.user.user.lastname}`} style={{fontSize:'20px'}}/>
        <p>{f({id:'customer-code'})}: {props.entry.user.user.customer_number}</p>
        <small className='mr-xs'>{f({id:'balance'})}</small>
        <small>{props.entry.user.user.balance} AZN</small>
          <Card.Body className='mt-xs' style={{padding:0}}>
           <Link href="/new-order">
            <a>
           <ButtonComponent className='w-100' label={f({id:'makeorder'})} startElement={<img className='mr-xs' src="/assets/icons/el.svg"/>} style={{marginBottom:'10px'}} />
            </a>
           </Link>
           <Link href="/balance">
           <a>
          <ButtonComponent className='w-100' label={f({id:'increases-balance'})} startElement={<img className='mr-xs' src="/assets/icons/el2.svg"/>}/>
           </a>
          </Link>
          <Link href="/decleration">
           <a>
          <ButtonComponent className='w-100 mt-xs' label={f({id:'declare-inadvance'})} startElement={<img className='mr-xs' src={'/assets/icons/upload.svg'} />}/>
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
                    <img src={'/assets/icons/book.svg'}/><span>{f({id:'addresses-abroad'})}</span> 
                    </a>
                 </Link>
            </li>
            <Divider />
            <li  >
                <Link   href="/orders">
                <a className={splitLocation[1] === "orders" ? " d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/shopping-bag.svg'}/><span>{f({id:'orders'})}</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li  >
                <Link  href="/packages">
                <a className={splitLocation[1] === "packages" ? "d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/package.svg'}/><span>{f({id:'packages'})}</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link   href="/user-info">
                <a  className={splitLocation[1] === "user-info" ? "d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/personal-data.svg'}/><span>{f({id:'private-info'})}</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link  href="/balance">
                <a   className={splitLocation[1] === "balance" ? "d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/cashback.svg'}/><span>{f({id:'balance'})}</span>
                    </a>
                </Link>
            </li>
            <Divider />
             <li>
                <Link    href="/lends">
                <a className={splitLocation[1] === "lends" ? "d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/loan.svg'}/><span>{f({id:'lends'})}</span>
                    </a>
                </Link>
             </li>
             <Divider />
             <li >
                <Link href="/courier-order">
                <a className={splitLocation[1] === "courier-order" ? "d-flex active" : "d-flex"}>
                    <img src={'/assets/icons/delivery-man.svg'}/><span>{f({id:'courier-order'})}</span>
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
