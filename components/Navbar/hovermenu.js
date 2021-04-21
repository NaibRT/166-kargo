import Link from 'next/link';
import React, { memo, useRef } from 'react';
import { connect } from "react-redux";
import { LogOut } from "../../redux/entry/entryActions";
import ButtonComponent from "../button/index";
import Divider from '../divider/divider';
import { useIntl } from 'react-intl';


function Hovermenu(props) {
    const { formatMessage: f } = useIntl(); 
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    const navHoverMenuItemRefs = useRef([]);

    const addNavItems = (ref) => {
     if(ref && !navHoverMenuItemRefs.current.includes(ref)){
       navHoverMenuItemRefs.current.push(ref)
     }
   }
    const navItemHandler = (e) => {
        // navHoverMenuItemRefs.current.forEach(x => x.children[0].children[1]?.classList.remove('nav-item-active'));
        // console.log(e.currentTarget)
        // //e.currentTarget.classList.add('nav-item-active');
        props.setOpen(false);
        
    }
    return (

        <>
        <div className='user__menu-items'>
        <ul className='aside-list-container' style={{ listStyleType: 'none' }}>
        <li onClick={navItemHandler} ref={addNavItems}>
        <Link href="/decleration" >
            <a  className={splitLocation[1] === "myaddresses" ? " d-flex  " : "d-flex"}>
                <img src={'/assets/icons/upload.svg'} /><span>{f({id:'declare-inadvance'})}</span>
            </a>
        </Link>
    </li>
    <Divider />
            <li onClick={navItemHandler} ref={addNavItems} >
                <Link href="/myaddresses">
                    <a className={splitLocation[1] === "myaddresses" ? " d-flex  " : "d-flex"}>
                        <img src={'/assets/icons/book.svg'} /><span>{f({id:'addresses-abroad'})}</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li onClick={navItemHandler} ref={addNavItems} >
                <Link href="/orders">
                    <a className={splitLocation[1] === "orders" ? " d-flex  " : "d-flex"}>
                        <img src={'/assets/icons/shopping-bag.svg'} /><span>{f({id:'orders'})}</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li onClick={navItemHandler} ref={addNavItems} >
                <Link href="/packages">
                    <a className={splitLocation[1] === "packages" ? "d-flex  " : "d-flex"}>
                        <img src={'/assets/icons/package.svg'} /><span>{f({id:'packages'})}</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li onClick={navItemHandler} ref={addNavItems}>
                <Link href="/user-info">
                <a className={splitLocation[1] === "user-info" ? "d-flex  " : "d-flex"}>
                    
                        <img src={'/assets/icons/personal-data.svg'} /><span>{f({id:'private-info'})}</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li onClick={navItemHandler} ref={addNavItems}>
                <Link href="/balance">
                <a className={splitLocation[1] === "balance" ? "d-flex  " : "d-flex"}>
                    
                        <img src={'/assets/icons/cashback.svg'} /><span>{f({id:'balance'})}</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li onClick={navItemHandler} ref={addNavItems}>
                <Link href="/lends">
                <a className={splitLocation[1] === "lends" ? "d-flex  " : "d-flex"}>
                    
                        <img src={'/assets/icons/loan.svg'} /><span>{f({id:'lends'})}</span>
                    </a>
                </Link>
            </li>
            <Divider />
            <li onClick={navItemHandler} ref={addNavItems}>
                <Link href="/courier-order">
                <a className={splitLocation[1] === "courier-order" ? "d-flex  " : "d-flex"}>
                    
                        <img src={'/assets/icons/delivery-man.svg'} /><span>{f({id:'courier-order'})}</span>
                    </a>
                </Link>
            </li>
                <Divider />
            <li>
                    <ButtonComponent
                      className='bg-white w-100'
                     startElement={ <img src={'/assets/icons/logout.svg'} />}
                     label={f({id:'logout'})}
                     onClick={(e) => {
                         console.log(e)
                          //e.preventDevfault();
                         props.logout()
                         }
                        }
                    />
            </li>

        </ul>

    </div> 
        </>
    )
}

const mapStateToProps = state => ({

});

// const mapDispatchToProps = (dispatch, ownProps) => {
//    return {
//        LogOut,
//        setOpen:ownProps.setOpen
//    }
// }





export default  memo(Hovermenu)