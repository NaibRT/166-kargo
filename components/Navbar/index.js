import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { connect } from "react-redux";
import { LogOut } from "../../redux/entry/entryActions";
import { default as Button, default as ButtonComponent } from '../button';
import Card from '../card/card';
import Divider from "../divider/divider";
import Modal from '../modal-form/modal';
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

    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

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
    const {register, handleSubmit, errors} = useForm()
    return (
        <>
            <header className='header deskmenu'>
                <div className='bg'>
                    <Page>
                        {/*Top menu starts*/}
                        <nav className='top__header'>
                            <ul className='top__header-left'>
                                <li>
                                    <Link href='/faq'><a>{f({ id: 'faq' })}</a></Link>
                                </li>
                                <li>
                                    <Link href='/search'><a>Bağlamam hardadır?</a></Link>
                                </li>
                                  <li>
                                    <Link href='/carryconditions'><a>Daşınma şərtləri</a></Link>
                                </li>
                                <li>
                                    <Link href='/orderscondition'><a>İstifadəçi şərtləri</a></Link>
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
                                                <Link href='/'><a className='text__decoration'><Button style={{ padding: '10px' }} label={f({ id: 'signin' })} startElement={<img className='mr-xs' src={'/assets/icons/user.svg'} />} /></a></Link>
                                            </li>
                                        

                                        </>

                                        :

                                        <li className='profile-container' style={{ display: 'flex', alignItems: 'center' }}>
                                            <span className='mr-xs'>
                                                {props.entry.user.user.firstname}
                                                {props.entry.user.user.lastname}
                                            </span>
                                            <Link href=''>
                                                <a>
                                                <img
                                                    className='profile-img'
                                                    src='https://cdn3.iconfinder.com/data/icons/avatars-add-on-pack-1/48/v-06-512.png'
                                                />
                                                </a>
                                            </Link>
                                            <div
                                                className='profile-dropdown'
                                            >
                                                <Hovermenu />
                                            </div>
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
                            <li className='navbar__item'>
                                <Link href='/'><a><Image src={'/assets/icons/166ye.svg'} width={149} height={55} /></a></Link>
                            </li>

                            <li className='navbar__item'>
                                <Link href='/about'><a>{f({ id: 'about' })}</a></Link>
                            </li>
                            <li className='navbar__item'>
                            <Link href='/tarif'><a>{f({ id: 'tariff' })}</a></Link>
                        </li>


                            <li className='navbar__item'>
                                <Link href='/example-shop'><a>{f({ id: 'examples' })}</a></Link>
                            </li>



                            <li className='navbar__item'>
                                <Link href='/blog'><a>{f({ id: 'blog' })}</a></Link>
                            </li>

                            <li className='navbar__item'>
                                <Link href='/contact'><a>{f({ id: 'contact' })}</a></Link>
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
                                    {isOpen && <Modal
                                        content={<>
                                            <Card className='login-card bg-white p-sm br-lg'>
                                                <Card.Header text='İstifadəçi girişi' />
                                                <Card.Body className='p-none'>
                                                    <form className='login-form' onSubmit={handleSubmit(submit)}>
                                                        <FromGroup
                                                            label='E-mail'
                                                            bodyClass='bg-bg w-100'
                                                            error={errors.email?.message}
                                                        >
                                                            <Input Ref={register({
                                                                required: { value: true, message: 'email is not valid' },
                                                                //  pattern:/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
                                                            })} type='email' name='email' />
                                                        </FromGroup>
                                                        <FromGroup
                                                            label='Sifre'
                                                            bodyClass='bg-bg w-100'
                                                            error={errors.password?.message}
                                                        >
                                                            <Input
                                                                Ref={register({
                                                                    required: { value: true, message: 'password is not valid' },
                                                                    // pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                                                                })}
                                                                type='password' name='password' />
                                                        </FromGroup>
                                                        <ButtonComponent type='submit' className='w-100 mt-xs' label='Daxil ol' />
                                                    </form>
                                                </Card.Body>
                                            </Card>
                                        </>}
                                        handleClose={togglePopup}
                                    />}

                                    <figure className='user__menu'>
                                        <img src={'/assets/icons/useri.svg'} />
                                        <div
                                            className='profile-dropdown'
                                        >
                                            <Hovermenu />
                                        </div>
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
    LogOut
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Navbar));