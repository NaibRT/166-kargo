import React, {useRef, useEffect} from 'react'
import Link from 'next/link'
import Divider from '../divider/divider'

export default function Hovermenu(props) {
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (

        <>
        <div className='user__menu-items'>
        <ul className='aside-list-container' style={{ listStyleType: 'none' }}>
            <li >
                <Link href="/myaddresses">
                    <a className={splitLocation[1] === "myaddresses" ? " d-flex active" : "d-flex"}>
                        <img src={'/assets/icons/book.svg'} /><span>Xaricdəki ünvanlarım</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li  >
                <Link href="/orders">
                    <a className={splitLocation[1] === "orders" ? " d-flex active" : "d-flex"}>
                        <img src={'/assets/icons/shopping-bag.svg'} /><span>Sifarişlərim</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li  >
                <Link href="/packages">
                    <a className={splitLocation[1] === "packages" ? "d-flex active" : "d-flex"}>
                        <img src={'/assets/icons/package.svg'} /><span>Bağlamalarım</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link href="/user-info">
                    <a>
                        <img src={'/assets/icons/personal-data.svg'} /><span>Şəxsi məlumatlar</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link href="/balance">
                    <a >
                        <img src={'/assets/icons/cashback.svg'} /><span>Balansımız</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li>
                <Link href="/lends">
                    <a>
                        <img src={'/assets/icons/loan.svg'} /><span>Borclarım</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li >
                <Link href="/courier-order">
                    <a>
                        <img src={'/assets/icons/delivery-man.svg'} /><span>Kuryer sifarişi</span>
                    </a>
                </Link>
                </li>
                <Divider />
                <li>
                <Link href="/courier-order">
                    <a onClick={props.LogOut}>
                        <img src={'/assets/icons/logout.svg'} /><span>Çıxış</span>
                    </a>
                </Link>
            </li>

        </ul>

    </div> 
        </>
    )
}
