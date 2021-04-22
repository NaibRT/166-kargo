import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { connect } from "react-redux";
import { Login, LogOut } from "../../redux/entry/entryActions";
import { default as Button } from '../button';
import Divider from "../divider/divider";
import Page from '../page/page';
import Burger from './burger';
import Hovermenu from './hovermenu';
import MenuMobile from './menu-mobile';



const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) return;
            handler(event);
        };
        document.addEventListener("mousedown", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, [ref, handler]);
};


const Navbar = (props) => {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isHoverMenu, setHoverMenu] = useState(false);



    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const hovermenuToggle = () => {
        setHoverMenu(!isHoverMenu);
    }

    useEffect(() => {
        setOpen(false)
    }, [basePath])

    const submit = (data) => {
        props.Login('auth/login', JSON.stringify(data), { 'content-type': 'application/json' })
    }
    const { locale, locales, basePath, asPath } = useRouter();
    const router = useRouter();
    const { formatMessage: f } = useIntl();

    const handleLocaleChange = (e) => {
        const locale = e.target.value;
        router.push(`${asPath}`, `${asPath}`, { locale })
    }

    const {register, handleSubmit, errors} = useForm();
    const navItemRefs = useRef([]);

    const addNavItems = (ref) => {
       if(ref && !navItemRefs.current.includes(ref)){
         navItemRefs.current.push(ref)
       }
     }
    const navItemHandler = (e) => {
        navItemRefs.current.forEach(x => x.children[0].classList.remove('nav-item-active'));
        e.target.classList.add('nav-item-active');
    }


    return (
        <>
            <header className='header deskmenu'>
                <div className='bg'>
                    <Page>
                        {/*Top menu starts*/}
                        <nav className='top__header'>
                            <ul className='top__header-left'>
                                <li onClick={navItemHandler} ref={addNavItems}>
                                    <Link href='/faq'><a>{f({ id: 'faq' })}</a></Link>
                                </li>
                                {/* <li onClick={navItemHandler} ref={addNavItems}>
                                    <Link href='/'><a>{f({id:'calculator'})}</a></Link>
                                </li> */}
                                <li onClick={navItemHandler} ref={addNavItems}>
                                    <Link href='/valuta'><a>{f({id:'converter'})}</a></Link>
                                </li>
                                <li onClick={navItemHandler} ref={addNavItems} className='navbar__item'>
                                  <Link href='/contact'><a>{f({ id: 'contact' })}</a></Link>
                                </li>
                                <li onClick={navItemHandler} ref={addNavItems}>
                                    <Link href='/search'><a>{f({id:'search'})}</a></Link>
                                </li>

                            </ul>
                            <ul className='top__header-right'>
                                {
                                    !props.entry.isLoged ?
                                        <>
                                            <li>
                                                <Link href='/register'><a>{f({ id: 'signup' })}</a></Link>
                                            </li>
                                            <li>
                                                <Link href='/login'><a className='text__decoration'><Button style={{ padding: '10px' }} label={f({ id: 'signin' })} startElement={<img className='mr-xs' src={'/assets/icons/user.svg'} />} /></a></Link>
                                            </li>
                                        

                                        </>

                                        :

                                        <li className='profile-container' style={{ display: 'flex', alignItems: 'center' }}>
                                            <span className='mr-xs'>
                                                {props.entry.user.user.firstname}
                                                &nbsp;
                                                {props.entry.user.user.lastname}
                                            </span>
                                            <Link href=''>
                                                <a>
                                                <img
                                                     onClick={hovermenuToggle}
                                                    className='profile-img'
                                                    src='https://cdn3.iconfinder.com/data/icons/avatars-add-on-pack-1/48/v-06-512.png'
                                                />
                                                </a>
                                            </Link>
                                            {
                                                isHoverMenu &&
                                              <div className='profile-dropdown'>
                                                  <Hovermenu  setOpen={hovermenuToggle} logout={props.LogOut} />
                                              </div>
                                            }
     
                                        </li>
                                }
                            </ul>
                        </nav>
                        {/*Top menu ends*/}
                    </Page>
                </div>


                <Page>
                    <nav className='flex'>
                        <ul className='navbar'>
                            <li onClick={navItemHandler} ref={addNavItems} className='navbar__item'>
                                <Link href='/'><a><Image src={'/assets/icons/166ye.svg'} width={149} height={55} /></a></Link>
                            </li>

                            <li onClick={navItemHandler} ref={addNavItems} className='navbar__item'>
                                <Link href='/about'><a>{f({ id: 'about' })}</a></Link>
                            </li>
                            <li onClick={navItemHandler} ref={addNavItems} className='navbar__item'>
                                <Link href='/'><a>{f({ id: 'address' })}</a></Link>
                            </li>
                            <li onClick={navItemHandler} ref={addNavItems} className='navbar__item'>
                                <Link href='/example-shop'><a>{f({ id: 'examples' })}</a></Link>
                            </li>
                            
                            <li onClick={navItemHandler} ref={addNavItems} className='navbar__item'>
                            <Link href='/tarif'><a>{f({ id: 'tariff' })}</a></Link>
                        </li>

                            <li onClick={navItemHandler} ref={addNavItems} className='navbar__item'>
                                <Link href='/blog'><a>{f({ id: 'blog' })}</a></Link>
                            </li>

                            <li className='navbar__item dies'>
                                <select className='navbar__item_lang' value={locale} onChange={handleLocaleChange}>
                                    {locales.map(locale => (
                                        <option key={locale} value={locale}>
                                            {locale}
                                        </option>
                                    ))}
                                </select>
                                {/* <span><Image src={'/assets/arr.svg'} width={11} height={6} className='img'/></span>*/}
                            </li>

                        </ul>

                        <span>
                            <Image src={'/assets/icons/call.svg'} width={28} height={28} />
                            <span className='call'>*0166</span>
                        </span>
                    </nav>
                </Page>
            </header>



            {/*MOBILE MENU*/}
            <header className="mobile-header">
                <Page>
                    <div className='nav flex'>

                        <div ref={node}>
                            <Burger open={open} setOpen={setOpen} />
                            <MenuMobile open={open} setOpen={setOpen} />
                        </div>
                        <figure>
                            <Link href='/'><a > <img src={'/assets/icons/logomob.svg'} style={{ cursor: 'pointer' }} /></a></Link>
                        </figure>
                        {
                            !props.entry.isLoged ?
                                <>
                                    <figure className='user__menu' onClick={togglePopup}>
                                        <img style={{width:'20px'}} src={'/assets/icons/useri.svg'} />
                                        <small>Hesabım</small>
                                        <ul className='log-register'>
                                             <Divider/>
                                             <Link href='/login'><a><li>{f({id:'login'})}</li></a></Link>
                                             <Divider/>
                                             <Link href='/register'><a><li>{f({id:'signup'})}</li></a></Link>
                                        </ul>
                                    </figure>
                                </>
                                :
                                <>
                                    <figure className='user__menu'>
                                        <img onClick={hovermenuToggle} src={'/assets/icons/useri.svg'} />
                                        {
                                           isHoverMenu &&  
                                             <div className='profile-dropdown'>
                                                 <Hovermenu setOpen={hovermenuToggle} logout={props.LogOut}  />
                                             </div>
                                        }
              
                                    </figure>
                                </>
                        }
                    </div>
                </Page>
            </header>

        </>)

}

const mapStateToProps = state => ({
    entry: state.entry,
});

const mapDispatchToProps = {
    Login,
    LogOut
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Navbar));