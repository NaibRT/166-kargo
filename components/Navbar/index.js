import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from "react";
import { useIntl } from 'react-intl';
import { connect } from "react-redux";
import { LogOut } from "../../redux/entry/entryActions";
import { default as Button, default as ButtonComponent } from '../button';
import Page from '../page/page';

const Navbar = (props) => {

    // const {locale, locales} = useRouter();

    const { locale, locales } = useRouter();
    const router = useRouter();
    const { formatMessage: f } = useIntl();

    const handleLocaleChange = (e) => {
        const locale = e.target.value;
        router.push('/', '/', { locale })
    }
    return (
        <header className='header'>
            <div className='bg'>
                <Page>
                    {/*Top menu starts*/}
                    <nav className='top__header'>
                        <ul className='top__header-left'>
                            <li>
                                <Link href='/faq'><a>{f({ id: 'faq' })}</a></Link>
                            </li>
                            <li>
                                <Link href='/'><a>{f({ id: 'calculator' })}</a></Link>
                            </li>
                            <li>
                                <Link href='/'><a>{f({ id: 'converter' })}</a></Link>
                            </li>
                            <li>
                                <Link href='/contact'><a>{f({ id: 'contact' })}</a></Link>
                            </li>
                            <li>
                                <Link href='/'><a>{f({ id: 'whereis' })}</a></Link>
                            </li>
                        </ul>
                        <ul className='top__header-right'>
<<<<<<< HEAD
                            <li>
                                <Link href='/register'><a>{f({ id: 'signup' })}</a></Link>
                            </li>
                            <li>
                                <Link href='/'><a className='text__decoration'><Button className='p-sm' style={{ marginTop: '-10px' }} label={f({ id: 'signin' })} startElement={<img className='mr-xs' src={'/assets/icons/user.svg'} />} /></a></Link>
                            </li>
=======
                        {
                            !props.entry.isLoged ?
                               <>
                                <li>
                                    <Link href='/register'><a>{f({ id: 'signup' })}</a></Link>
                                </li>
                                <li>
                                  <Link href='/'><a className='text__decoration'><Button className='p-sm' style={{ marginTop: '-10px' }} label={f({ id: 'signin' })} startElement={<img className='mr-xs' src={'/assets/icons/user.svg'} />} /></a></Link>  
                               </li>
                               </>

                               :

                               <li className='profile-container'>
                                <Link href='/orders'>
                                     <img
                                       className='profile-img'
                                       src='https://cdn3.iconfinder.com/data/icons/avatars-add-on-pack-1/48/v-06-512.png'
                                     />
                                 </Link>
                                     <div
                                     className='profile-dropdown'
                                     >
                                         <ButtonComponent onClick={props.LogOut} label='Logout'/>
                                     </div>
                               </li>
                         }
>>>>>>> 2919030bf44e73720f23685aba28e216f1862cb9
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
                            <Link href='/'><a>{f({ id: 'addresses' })}</a></Link>
                        </li>

                        <li className='navbar__item'>
                            <Link href='/'><a>{f({ id: 'examples' })}</a></Link>
                        </li>

                        <li className='navbar__item'>
                            <Link href='/'><a>{f({ id: 'prices' })}</a></Link>
                        </li>

                        <li className='navbar__item'>
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
    )

}

const mapStateToProps = state => ({
    entry: state.entry,
});

const mapDispatchToProps = {
    LogOut
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Navbar));